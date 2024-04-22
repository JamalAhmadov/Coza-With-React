import { useEffect } from "react";
import { getCategories } from "../app/categorySlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

interface CategoryProps {
  setCategory: (category: string) => void;
}

const Category: React.FC<CategoryProps> = ({ setCategory }) => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-4 items-centerb py-2">
      <div className="flex md:gap-4 gap-1 items-center cursor-pointer flex-wrap">
        {categories?.map((category, i) => (
          <div onClick={() => setCategory(category)} key={i}>
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
