import React from 'react'
import Cover from './Cover'
import ProductCard from './category/ProductCard'
import Sidebar from './Sidebar'
import About from './About'
import Categorytype from './category/Categorytype'
const Home = () => {
      return (
            <>
                  <Cover />
                  <Categorytype/>
                  <ProductCard />
                  <About />
            
            
            </>
        
  )
}

export default Home