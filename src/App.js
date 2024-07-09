import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  // 로그인 여부 필요
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  console.log("isAuth", isAuth);

  return (
    <>
      <Header />
      {/* 로그아웃됐을때 필요한 컴포넌트 */}
      {!isAuth && <Auth />}
      {/* 로그인됐을때 필요한 컴포넌트 */}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
