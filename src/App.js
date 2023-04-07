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
import ProductCategory from "./components/category/ProductCategory";
import Categorytype from "./components/category/Categorytype";
import Contactus from "./components/Contactus"
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
        <Route path="/prductcategory" element={<ProductCategory />} />
        <Route path="/categorytype" element={<Categorytype />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contactus" element={<Contactus/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
