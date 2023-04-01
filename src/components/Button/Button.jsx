import React from 'react'

const Button = () => {

      const handleClick = ({ text}) => {
            console.log(text);
          };
      return (
        <>
          <button type="submit" onClick={handleClick}
           
            className="inline-flex items-center justify-center h-12 px-6
            font-medium tracking-wide text-white transition duration-200 rounded
            shadow-md bg-green-600 hover:bg-green-700 focus:shadow-outline
            focus:outline-none" >
                        {/* {text} */}new product
                        
          </button>
        </>
      );
}

export default Button