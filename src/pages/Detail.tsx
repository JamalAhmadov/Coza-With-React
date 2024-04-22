import { useEffect } from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import DetailComp from "../components/DetailComp";
import { getDetailProduct } from "../app/productSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";


const Detail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { productDetail, productDetailStatus } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (id) {
      const numericId = parseInt(id);
      if (!isNaN(numericId)) {
        dispatch(getDetailProduct(numericId));
      }
    }
  }, [dispatch, id]);



  return (
    <div>
      {productDetailStatus == "loading" ? (
        <Loading />
      ) : (
        <DetailComp productDetail={productDetail} />
      )}
    </div>
  );
};

export default Detail;
