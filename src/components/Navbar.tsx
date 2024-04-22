import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="hidden md:flex md:justify-start justify-center gap-4 font-bold text-sm w-5/12 text-gray-700">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/features">Features</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
    
  );
};

export default Navbar;
