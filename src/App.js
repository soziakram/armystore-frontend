import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import CategoryCard from "./components/category/CategoryCard";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Cover />
      <CategoryCard />
      <About/>
      <Footer />
    </>
  );
}

export default App;
