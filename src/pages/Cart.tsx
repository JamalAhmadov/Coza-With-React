import { useAppDispatch, useAppSelector } from "../app/hooks";
import { clearCart, getCartTotal, removeFromCart } from "../app/cartSlice";
import React, { useEffect } from "react";
import { ProductDetail } from "../Types/types";

const Cart: React.FC = () => {
  const { carts, totalAmount } = useAppSelector((state) => state.carts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-wrap items-center w-[85%] gap-5">
        <div className="w-full flex justify-end items-center gap-3">
          <h1 className="text-2xl font-bold">
            Total: $ {totalAmount.toFixed(2)}
          </h1>
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-indigo-700 text-white w-32 h-10"
          >
            Clear
          </button>
        </div>
        {carts.map((item: ProductDetail, i: number) => (
          <div
            className="w-full h-28 border rounded-md shadow-lg p-4 flex "
            key={i}
          >
            <div className="flex items-center justify-center px-2 w-56">
              <img className="h-full" src={item.image} alt="" />
            </div>
            <div className="w-full flex flex-col gap-2 p-2 relative">
              <div className="">
                <h1>{item.title}</h1>
              </div>
              <div className="flex w-1/2 h-full">
                <div className="">
                  <span>({item.quantity} x </span>
                  <span>$ {item.price})</span>
                </div>
                <span className="text-red-500 absolute top-0 right-0">
                  {item.quantity !== undefined
                    ? `$ ${(item.quantity * item.price).toFixed(2)}`
                    : ""}
                </span>
                <span></span>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-indigo-400 text-white text-md py-1 px-2 absolute bottom-0 right-0"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
