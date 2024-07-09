import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../store";

const Header = () => {
  // 로그인 여부 필요
  // props로 내려줄 필요없이 전역으로 사용 가능
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const logoutHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {/* 로그인됐을때만 이부분을 보여줌 */}
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">내 상품들</a>
            </li>
            <li>
              {/* 버튼을 누를때마다 logoutHandler가 발생함 */}
              <button onClick={logoutHandler}>로그아웃</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
