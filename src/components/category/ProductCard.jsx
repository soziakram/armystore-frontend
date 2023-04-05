import React from 'react'

const ProductCard = () => {
      return (
        <div className="max-w-xs  shadow-md dark:bg-gray-900 dark:text-gray-100">
          <img
            src="https://source.unsplash.com/random/300x300/?2"
            alt=""
            className="object-cover object-center w-full  h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                Donec lectus leo
              </h2>
              <p className="dark:text-gray-100">
                Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                eget.
              </p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Read more
            </button>
            <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              open
            </button>
          </div>
        </div>
      );
}

export default ProductCard