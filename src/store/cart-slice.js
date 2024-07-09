import { createSlice } from "@reduxjs/toolkit";

// get 요청으로 cart 데이터 받아옴
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-test-925ac-default-rtdb.firebaseio.com/cart.json"
      );

      // fetch가 실패하면 에러메시지 띄우기
      if (!response.ok) {
        throw new Error("실패");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      // 데이터를 받아왔으면 store에 업데이트 해줘야함
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      // 에러처리
    }
  };
};

// put요청으로 cart 데이터를 보냄
// cart 데이터를 받아서 보내는 로직
export const sendCartData = (cart) => {
  // 언젠가 액션으로 반환될수있는 함수
  return async (dispatch) => {
    // sendRequest를 수행하면 fetch가 실행
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-test-925ac-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          // cart에 관한 값을 요청
          body: JSON.stringify(cart),
        }
      );

      // fetch가 실패하면 에러메시지 띄우기
      if (!response.ok) {
        throw new Error("실패");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.error(error.message);
    }
  };
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      /*TODO- 여기에 코드를 작성해 주세요*/
      // ProductItem의 addToCartHandler 보면 id, title, price를 객체로 받아오고 있음
      const newItem = action.payload;
      // state의 items 배열에서 item의 id와 newItem의 id가 같은 것만 찾아줌
      const existingItem = state.items.find((item) => item.id === newItem.id);

      // 총수량 +1
      state.totalQuantity++;

      // 장바구니에 존재하지 않으면 리스트에 새로 추가해줘야함
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          // 리스트에 존재하지 않는 항목을 추가하는거니까 수량 1
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        // 이미 존재한다면 수량 +1만 해주면됨
        existingItem.quantity++;
        // 총가격은 현재 총가격에 새항목의 가격을 더해줌
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      /*TODO- 여기에 코드를 작성해 주세요*/
      // CartItem의 removeItemHandler에서 id만 받아오고있음
      const id = action.payload;
      // item의 id가 받아온 id와 같다면 이미 존재하는 항목
      // - 버튼은 장바구니에서만 쓰이기 때문에 이미 존재하는 항목임.
      const existingItem = state.items.find((item) => item.id === id);
      // 총 수량 -1
      state.totalQuantity--;

      // 총 수량이 1일때 - 버튼을 누르면 장바구니에서 빼줘야함
      if (existingItem.quantity === 1) {
        // id가 같지않은것만 남겨줌
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
