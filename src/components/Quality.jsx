import React from 'react'

const Quality = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col-reverse justify-between mx-auto lg:flex-row">
        <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
          <h1 className='text-5xl bold '>high quality tactical equipments</h1>
          <p className='text-s'>
            At Army Store , we are committed to delivering the highest quality
            products to our customers. We take pride in our rigorous quality
            control processes, which are designed to ensure that every product
            that leaves our facility meets our exacting standards. Our products
            are made from only the finest materials and are crafted with care
            and attention to detail. We stand behind our products with a
            guarantee of quality, and if for any reason you are not completely
            satisfied with your purchase, we will do everything in our power to
            make it right. At Army Store, we believe that quality is the key to
            our success, and we are dedicated to providing our customers with
            nothing but the best.
          </p>
        </div>
        <div className="lg:w-2/3 xl:w-4/5  dark:bg-gray-800">
          <div className="flex items-center justify-center p-4 md:p-8 lg:p-10">
            <img
              src=" https://images.unsplash.com/photo-1557084230-27999d53fc13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
              alt=""
              className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quality