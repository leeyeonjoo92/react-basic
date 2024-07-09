import { useDispatch, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { fetchCartData, sendCartData } from "./store/cart-slice";

// 처음 한번은 데이터를 보내지 않게해야함
// 새로고침할때 값이 리셋되는 이유가
// 처음 App 컴포넌트가 실행될때 reducer의 initialState를 읽고 보내줌
// -> 파이어베이스 DB가 덮어씌워진것
let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  // 카트 데이터를 가져와야함
  // store/index.js 에서 reducer 속성으로 cart를 보내고있음
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // 새로고침시 데이터를 유지하는 로직
  useEffect(() => {
    // 일단 cart 데이터를 가져옴
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    // 최초 1회 일때는
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  // // 이렇게만하면 새로고침하면 장바구니, DB 리셋됨
  // // 요청할때마다 하나하나 작성하면 컴포넌트가 너무 길어짐
  // useEffect(() => {
  //   fetch("https://react-test-925ac-default-rtdb.firebaseio.com/cart.json", {
  //     method: "PUT",
  //     // cart에 관한 값을 요청
  //     body: JSON.stringify(cart),
  //   });

  //   // cart 값이 바뀔때마다 함수 실행
  // }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
