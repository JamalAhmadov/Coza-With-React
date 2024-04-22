import Logo from "./Logo";
import Navbar from "./Navbar";
import Icons from "./Icons";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header className="w-full h-16 flex items-center justify-center bg-white">
      <div className="flex items-center justify-between w-10/12">
        <Logo />
        <Navbar />
        <Icons />
        <div className="block md:hidden">
          <GiHamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
