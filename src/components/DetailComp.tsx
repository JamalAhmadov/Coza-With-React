import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { addToCart } from "../app/cartSlice";
import { ProductDetail } from "../Types/types";

interface Props {
  productDetail: ProductDetail | null;
}

const DetailComp: React.FC<Props> = ({ productDetail }) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);

  const incQuantity = () => {
    if (productDetail && quantity < productDetail.rating?.count) {
      setQuantity(quantity + 1);
    }
  };
  const decQuantity = () => {
    if (productDetail && quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const quantityInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(e.target.value);
    if (!isNaN(inputValue)) {
      const maxQuantity = productDetail?.rating?.count || 0;
      setQuantity(Math.min(inputValue, maxQuantity));
    } else {
      setQuantity(0);
    }
  };
  const addToBasket = () => {
    if (productDetail) {
      dispatch(
        addToCart({
          id: productDetail.id,
          title: productDetail.title,
          image: productDetail.image,
          price: productDetail.price,
          quantity: quantity, 
        })
      );
    }
  };
  

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex w-4/6 min-h-2/4 border rounded-md shadow-lg p-4">
        {productDetail ? (
          <>
            <div className="w-2/5 flex items-center justify-center">
              <img className="w-52 h-52" src={productDetail.image} alt="" />
            </div>
            <div className="w-3/5 flex items-start flex-col justify-center">
              <h1 className="font-semibold text-2xl my-2">
                {productDetail.title}
              </h1>
              <p>{productDetail.description}</p>
              <div className="my-2 w-full flex justify-between items-center">
                <span className="font-semibold ">
                  Stock: {productDetail.rating?.count}
                </span>
                <div>
                  <button
                    onClick={decQuantity}
                    className="w-9 h-9 cursor-pointer bg-stone-200"
                  >
                    -
                  </button>
                  <input
                    className="w-10 text-center outline-none font-semibold"
                    type="text"
                    // max={productDetail.rating?.count}
                    value={quantity}
                    onChange={quantityInputHandler}
                  />
                  <button
                    onClick={incQuantity}
                    className="w-9 h-9 cursor-pointer bg-stone-200"
                  >
                    +
                  </button>
                </div>
                <span className="text-red-600 font-semibold m-2">
                  $ {productDetail.price}
                </span>
              </div>
              <div className="w-full flex justify-end pt-4">
                <button
                  onClick={addToBasket}
                  className="w-40 h-9 bg-indigo-400 text-white"
                >
                  Add to basket
                </button>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default DetailComp;
