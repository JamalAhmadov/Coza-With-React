import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Category from "../components/Category";
import Sort from "../components/Sort";
import { getCartTotal } from "../app/cartSlice";
import { useAppDispatch } from "../app/hooks";
import Slider from "../components/Slider/Slider";
import BannerCard from "../components/BannerCard";
import banner1 from "../../public/images/banner/banner-01.jpg";
import banner2 from "../../public/images/banner/banner-02.jpg";
import banner3 from "../../public/images/banner/banner-03.jpg";

interface HomeProps {
  category?: string;
  sort?: string;
}
const Home: React.FC<HomeProps> = () => {
  const dispatch = useAppDispatch();
  const [sort, setSort] = useState<string | undefined>();
  const [category, setCategory] = useState<string | undefined>();

  useEffect(() => {
    dispatch(getCartTotal());
  }, []);

  return (
    <main>
      <section className="w-full h-screen">
        <Slider />
      </section>
      <section className="w-ful min-h-[60vh] flex justify-center py-3">
        <div className="lg:w-[85%] sm:w-[95%] justify-center items-center flex flex-col">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <BannerCard src={banner1} category="Women" date="Spring 2018" />
            <BannerCard src={banner2} category="Men" date="Spring 2018" />
            <BannerCard src={banner3} category="Accessories" date="New Trend" />
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center py-3">
        <div className="lg:w-[85%] sm:w-[95%] justify-center flex flex-col gap-12">
          <div>
            <h3 className="text-4xl font-extrabold">PRODUCT OVERVIEW</h3>
            <div className="flex md:items-center justify-between items-start flex-col md:flex-row">
              <Category setCategory={setCategory} />
              <Sort setSort={setSort} />
            </div>
          </div>
          <div>
            <Product category={category} sort={sort} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
