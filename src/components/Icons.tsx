import { IoSearchSharp, IoCart } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

const Icons = () => {
  const { carts } = useAppSelector((state) => state.carts);

  return (
    <div className="flex gap-5 w-4/12 justify-end text-gray-700">
      <IoSearchSharp size={24} />
      <NavLink to="/cart">
        <div className="flex relative">
          <IoCart size={24} />{" "}
          <span className="absolute text-xs bg-indigo-700 text-white w-4 h-4 top-[-10px] right-[-8px] flex items-center justify-center">
            {carts.length}
          </span>{" "}
        </div>
      </NavLink>
      <IoIosHeartEmpty size={24} />
    </div>
  );
};

export default Icons;
