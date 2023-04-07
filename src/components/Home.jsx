import React from "react";
import Cover from "./Cover";
import ProductCard from "./category/ProductCard";
import About from "./About";
import Categorytype from "./category/Categorytype";
const Home = () => {
  return (
    <>
      <Cover />
      <Categorytype />
<h1 className="uppercase text-black text-6xl pl-10"> trending </h1>
      <ProductCard />

      <About />
    </>
  );
};

export default Home;
