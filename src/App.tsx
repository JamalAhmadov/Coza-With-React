import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Home, Shop, Features,Cart, Detail, NotFound, Blog, About, Conact  } from "./pages";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Conact />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
