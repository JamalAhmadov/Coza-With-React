import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../Types/types";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart !== null) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const storeInLocalStorage = (data: object) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemCart = state.carts.find(
        (item: Item) => item.id === action.payload.id
      );

      if (isItemCart) {
        const tempCart = (state.carts = state.carts.map((item: Item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQty + item.price;

            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        }));
        state.carts = tempCart;
        storeInLocalStorage(state.carts);
      } else {
        state.carts.push(action.payload);
        storeInLocalStorage(state.carts);
      }
    },
    // removeFromCart: (state, action) => {
    //   const tempCart = state.carts.filter(
    //     (item: Item) => item.id !== action.payload
    //   );
    //   state.carts = tempCart;
    //   storeInLocalStorage(state.carts);
      
    // },
    removeFromCart: (state, action) => {
      const removedItem = state.carts.find((item: Item) => item.id === action.payload);
      if (removedItem) {
        state.carts = state.carts.filter((item: Item) => item.id !== action.payload);
        state.totalAmount -= removedItem.price * removedItem.quantity;
        state.itemCount = state.carts.length;
        storeInLocalStorage(state.carts);
      }
    },
    


    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
      state.totalAmount = 0;
      state.itemCount = 0;
    },

    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((total: number, item: Item) => {
        return (total += item.price * item.quantity);
      }, 0);
      state.itemCount = state.carts.length;
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, clearCart, getCartTotal } =
  cartSlice.actions;
