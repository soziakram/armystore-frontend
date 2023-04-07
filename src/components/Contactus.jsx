import React from "react";

const Contactus = () => {
  return (
    <section class="py-24 2xl:py-44 bg-green-100 rounded-b-10xl">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap items-center -mx-4">
          <div class="w-full md:w-1/2 lg:w-2/5 px-4 mb-20 md:mb-0">
          
            <h2 class="mt-8 mb-12 text-6xl md:text-6xl xl:text-6xl font-medium font-heading leading-tight">
              Have any question?
            </h2>
            <p class="mb-14 xl:mb-16 text-lg text-darkBlueGray-400">
              Lorem ipsum commodo, tristique lectus.
            </p>
            <div class="flex flex-wrap">
              <a
                class="inline-block py-5 px-10 mr-6 text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-xl"
                href="/"
              >
                Call
              </a>
              <a
                class="inline-block py-5 px-10 text-xl leading-6 font-medium tracking-tighter font-heading bg-white hover:bg-gray-50 focus:ring-2 focus:ring-gray-50 focus:ring-opacity-50 rounded-xl"
                href="/"
              >
                More
              </a>
            </div>
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default Contactus;
