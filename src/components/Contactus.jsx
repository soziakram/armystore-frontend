import React from "react";

const Contactus = () => {
  return (
    <section class="py-24 2xl:py-44 bg-gray-100 rounded-b-10xl">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap items-center -mx-4">
          <div class="w-full md:w-1/2 lg:w-2/5 px-4 mb-20 md:mb-0">
            <span class="mb-9 block font-medium uppercase tracking-widest text-xs leading-4 text-gray-300">
              Contact us
            </span>
            <h2 class="mt-8 mb-12 text-9xl md:text-10xl xl:text-11xl font-medium font-heading leading-tight">
              Have any question?
            </h2>
            <p class="mb-14 xl:mb-16 text-lg text-darkBlueGray-400">
              Lorem ipsum commodo, tristique lectus.
            </p>
            <div class="flex flex-wrap">
              <a
                class="inline-block py-5 px-10 mr-6 text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
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
          <div class="w-full md:w-1/2 lg:w-3/5 px-4">
            <img
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
