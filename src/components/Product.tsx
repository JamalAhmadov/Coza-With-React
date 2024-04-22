import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getCategoryProduct, getProducts } from "../app/productSlice";
import Loading from "./Loading";
import ReactPaginate from "react-paginate";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { ProductDetail } from "../Types/types";

interface ProductDetailWithSort  {
  sort?: string;
  category?: string;
}

const Product: React.FC<ProductDetailWithSort> = ({ sort, category }) => {
  const dispatch = useAppDispatch();
  const { products, productStatus } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProduct(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (selected: number) => {
    const newOffset = (selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  const navigate = useNavigate();

  return (
    // 
    //gap-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
    <div className="w-full flex flex-wrap gap-10 justify-center ">
      {productStatus === "loading" ? (
        <Loading />
      ) : (
        <>
          {currentItems
            ?.sort((a: ProductDetail, b: ProductDetail) =>
              sort === "inc"
                ? a.price - b.price
                : sort === "dec"
                ? b.price - a.price
                : 0
            )
            .map((product: ProductDetail) => (
              <div
                className="w-64 h-80 bg-slate-100 cursor-pointer flex flex-col items-center p-2 rounded-sm shadow-md justify-self-center"
                key={product.id}
                onClick={() => navigate(`products/${product.id}`)}
              >
                <div className="w-9/12 h-56">
                  <img
                    className="w-full max-h-56 object-cover"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="p-2 w-full h-20 flex flex-col  items-start relative">
                  <h3 className="text-sm w-[80%]">
                    {product.title.length >= 42
                      ? product.title.slice(0, 42) + "..."
                      : product.title}
                  </h3>
                  <p className="text-red-600 bg-slate-200 inline bottom-0 absolute font-medium p-[2px] rounded-sm ">
                    ${product.price}
                  </p>
                  <div className="absolute right-1 bottom-13">
                    <CiHeart size={22} />
                  </div>
                </div>
              </div>
            ))}
          <ReactPaginate
            className="paginateStyle"
            breakLabel="..."
            nextLabel={<MdOutlineNavigateNext />}
            onPageChange={({ selected }) => handlePageClick(selected)}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<MdOutlineNavigateBefore />}
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default Product;
