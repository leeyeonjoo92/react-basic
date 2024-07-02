import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 만약 로그인이 되어있다면 isLoggedIn = true
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    console.log(storedUserLoggedInInfo);
    if (storedUserLoggedInInfo === "1") setIsLoggedIn(true);
    // 만약 로그인이 되어있지 않다면 isLoggedIn = false
    // 어차피 새로고침하면 초기화돼서 false가 되지만
    // 이해를 위해 작성
    else setIsLoggedIn(false);
  }, []);
  // -> 두번째 인자를 넣지않으면 화면이 렌더링 될때마다 찍힘
  // => 빈배열로 넣어주면 처음 렌더링 될때만 한번 함수가 실행됨

  // 로그인이 됐는지 아닌지 판단
  // 페이지를 새로고침할때마다 상태가 초기화됨
  // -> 또 다른 로직을 추가해줘야함
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    // 로컬스토리지에 저장
    // setItem(키값, value값)
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    // 로컬스토리지에 저장된 값을 삭제해줘야함
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
