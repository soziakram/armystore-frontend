import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import About from "./components/About";
import ProductCard from "./components/category/ProductCard";
import Product from "./components/product/Product";
function App() {
  return (
    <>
      <Navbar />
      <Cover />
      <ProductCard />
        <Product/>
      <About/>
      <Footer />
    </>
  );
}

export default App;
