import React from 'react'
import Sidebar from '../Sidebar'
import ProductCard from './ProductCard'
const ProductCategory = () => {
      return (
        <section className="flex flex-row justify-between space-x-36">
          <Sidebar />
          <div className="flex flex-wrap space-y-6 space-x-2">
            <ProductCard />
          </div>
        </section>
      );
}

export default ProductCategory