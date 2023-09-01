import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";

// const cartInitialState = {
//   cartDisplay: false,
//   cartItems: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: cartInitialState,
//   reducers: {
//     toogle(state) {
//       state.cartDisplay = !state.cartDisplay;
//     },
//     add(state, action) {
//       const existingCartItemIndex = state.cartItems.findIndex(
//         (item) => item.id === action.payload
//       );

//       const existingCartItem = state.cartItems[existingCartItemIndex];

//       if (existingCartItem) {
//         state.cartItems[existingCartItemIndex].total += 1;
//         state.cartItems[existingCartItemIndex].amountPrice += action.payload;
//         return;
//       }
//       state.cartItems.push(action.item);
//     },
//     subtract(state, action) {
//       const itemAmount = state.cartItems[action.payload].amount;
//       if (itemAmount === 1) {
//         state.cartItems.splice(action.payload, 1);
//         return;
//       }
//       state.cartItems[action.payload].amount -= 1;
//     },
//   },
// });

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

// export const cartActions = cartSlice.actions;

export default store;
