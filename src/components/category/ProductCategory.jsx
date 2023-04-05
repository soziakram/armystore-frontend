import React from 'react'
import Sidebar from '../Sidebar'
import ProductCard from './ProductCard'
const ProductCategory = () => {
      return (
        <section className="flex flex-row justify-between">
          <Sidebar />
          <div className="flex flex-wrap">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      );
}

export default ProductCategory