import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/useHttp";

function App() {
  const [tasks, setTasks] = useState([]);

  // tasksObj -> 여러개의 데이터가 들어가 있어야하기 때문
  // 여기서는 useCallback 사용시 의존성배열이 필요없음
  // -> tasksObj를 인자로 받고있기 때문에 굳이 의존성배열로 빼주지않아도됨
  const transformTasks = useCallback((tasksObj) => {
    // tasksObj들을 받아와서 loadedTasks에 적재해줘야함
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  }, []);

  // useHttp의 매개변수로 받던 requestConfig, applyData의 위치를 sendRequest로 옮겼기때문에
  // 원래 여기서 받아오던 requestConfig의 url값을 fetchTask 안으로 이동
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();
  // applyData -> fetch를 통해 받아온 데이터를 setTask에 넣어주는 역할

  useEffect(() => {
    fetchTasks(
      {
        url: "https://react-test-925ac-default-rtdb.firebaseio.com/task.json",
      },
      transformTasks
    );
    // 의존성배열에 fetchTasks 넣어줘야함
    // -> fetchTasks 함수는 useHttp에서 생성됨.
    // -> useHttp에서 변화가 생길지 아닐지 모르기때문에 감지해줘야함
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
