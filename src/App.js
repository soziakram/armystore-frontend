import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import About from "./components/About";
import ProductCard from "./components/category/ProductCard";
import Product from "./components/product/Product";
import Payment from "./components/product/Payment";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cover" element={<Cover />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productcard" element={<ProductCard />} />

        <Route path="/payment" element={<Payment />} />
      </Routes>

      {/* <Cover />
      <ProductCard />
        <Product/>
      <About/> */}
      <Footer />
    </>
  );
}

export default App;
