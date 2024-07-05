import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/useHttp";

function App() {
  const [tasks, setTasks] = useState([]);

  // tasksObj -> 여러개의 데이터가 들어가 있어야하기 때문
  const transformTasks = (tasksObj) => {
    // tasksObj들을 받아와서 loadedTasks에 적재해줘야함
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  };

  const {
    isLoading,
    error,
    sendRequest: fetchTasks,
  } = useHttp(
    {
      url: "https://react-test-925ac-default-rtdb.firebaseio.com/task.json",
    },
    transformTasks
  );
  // applyData -> fetch를 통해 받아온 데이터를 setTask에 넣어주는 역할

  useEffect(() => {
    fetchTasks();
  }, []);

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
