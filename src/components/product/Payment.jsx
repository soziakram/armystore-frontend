import React from "react";

const Payment = () => {
  return (
    <section className="pt-12 pb-24 bg-blueGray-100 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="pb-9 mb-7 text-center border-b border-black border-opacity-5">
          <h2 className="text-9xl xl:text-10xl leading-normal font-heading font-medium text-center">
            Billing address
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4 mb-14 xl:mb-24">
          <div className="w-full md:w-8/12 lg:w-3/4 px-4 mb-14 md:mb-0">
            <div className="py-20 px-8 md:px-16 bg-white rounded-3xl">
              <div className="pb-16 mb-14 border-b border-gray-200 border-opacity-30">
                <div className="max-w-lg mx-auto">
                  <div className="flex flex-wrap mb-6 items-center">
                    <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                      <label className="text-lg text-darkBlueGray-400">
                        Your name:
                      </label>
                    </div>
                    <div className="w-full md:w-2/3">
                      <input
                        className="w-full px-5 py-3 text-lg leading-9 bg-green-50 border-2 border-green-400 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-xl"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-6 items-center">
                    <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                      <label className="text-lg text-darkBlueGray-400">
                        Username:
                      </label>
                    </div>
                    <div className="w-full md:w-2/3">
                      <input
                        className="w-full px-5 py-3 text-lg leading-9 bg-green-50 border-2 border-green-400 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-xl"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-6 items-center">
                    <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                      <label className="text-lg text-darkBlueGray-400">
                        Address 1:
                      </label>
                    </div>
                    <div className="w-full md:w-2/3">
                      <input
                        className="w-full px-5 py-3 text-lg leading-9 bg-green-50 border-2 border-green-400 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-xl"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                      <label className="text-lg text-darkBlueGray-400">
                        Address 2:
                      </label>
                    </div>
                    <div className="w-full md:w-2/3">
                      <input
                        className="w-full px-5 py-3 text-lg leading-9 bg-green-50 border-2 border-green-400 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-xl"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-16 mb-14 border-b border-gray-200 border-opacity-30">
                <div className="max-w-lg mx-auto mb-16">
                  <div className="flex flex-wrap mb-6 items-center">
                    <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                      <label className="text-lg text-darkBlueGray-400">
                        Country:
                      </label>
                    </div>
                    <div className="w-full md:w-2/3">
                      <input
                        className="w-full px-5 py-3 text-lg leading-9 bg-green-50 border-2 border-green-400 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-xl"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-6 items-center">
                    <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                      <label className="text-lg text-darkBlueGray-400">
                        State:
                      </label>
                    </div>
                    <div className="w-full md:w-2/3">
                      <input
                        className="w-full px-5 py-3 text-lg leading-9 bg-green-50 border-2 border-green-400 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-xl"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-6 items-center">
                    <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                      <label className="text-lg text-darkBlueGray-400">
                        Zip code:
                      </label>
                    </div>
                    <div className="w-full md:w-1/3">
                      <input
                        className="w-full px-5 py-3 text-lg leading-9 bg-green-50 border-2 border-green-400 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-xl"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:ml-16">
                  <label className="relative flex mb-8 items-center">
                    <input
                      className="relative ml-10 appearance-none"
                      type="checkbox"
                    />
                    <button className="absolute top-1/2 left-0 transform -translate-y-1/2 h-6 w-6">
                      <svg
                        width="27"
                        height="27"
                        viewbox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="27"
                          height="27"
                          rx="8"
                          fill="#28E172"
                        ></rect>
                        <path
                          d="M11.4534 19L6 13.6758L6.72022 12.9726L11.4534 17.5937L21.2798 8L22 8.70316L11.4534 19Z"
                          fill="white"
                        ></path>
                      </svg>
                    </button>
                    <span className="ml-2 text-sm text-gray-400">
                      Shipping address is the same as my billing address
                    </span>
                  </label>
                  <label className="relative flex items-center">
                    <input
                      className="relative ml-10 appearance-none"
                      type="checkbox"
                    />
                    <button className="absolute top-1/2 left-0 transform -translate-y-1/2 h-6 w-6">
                      <svg
                        width="27"
                        height="27"
                        viewbox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="26"
                          height="26"
                          rx="7.5"
                          stroke="green"
                        ></rect>
                      </svg>
                    </button>
                    <span className="ml-2 text-sm text-gray-400">
                      Save this information for next time
                    </span>
                  </label>
                </div>
              </div>
              <div className="mb-16 md:ml-16">
                <label className="relative inline-flex mb-5 mr-16 items-center">
                  <input
                    className="relative ml-10 appearance-none"
                    type="checkbox"
                  />
                  <button className="absolute top-1/2 left-0 transform -translate-y-1/2 h-6 w-6">
                    <svg
                      width="27"
                      height="27"
                      viewbox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="27" height="27" rx="8" fill="#28E172"></rect>
                      <path
                        d="M11.4534 19L6 13.6758L6.72022 12.9726L11.4534 17.5937L21.2798 8L22 8.70316L11.4534 19Z"
                        fill="white"
                      ></path>
                    </svg>
                  </button>
                  <span className="ml-2 text-sm text-gray-400 leading-3">
                    Credit card
                  </span>
                </label>
                <label className="relative inline-flex mb-5 mr-16 items-center">
                  <input
                    className="relative ml-10 appearance-none"
                    type="checkbox"
                  />
                  <button className="absolute top-1/2 left-0 transform -translate-y-1/2 h-6 w-6">
                    <svg
                      width="27"
                      height="27"
                      viewbox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="26"
                        height="26"
                        rx="7.5"
                        stroke="green"
                      ></rect>
                    </svg>
                  </button>
                  <span className="ml-2 text-sm text-gray-400 leading-3">
                    Debit card
                  </span>
                </label>
                <label className="relative inline-flex mb-5 items-center">
                  <input
                    className="relative ml-10 appearance-none"
                    type="checkbox"
                  />
                  <button className=" absolute top-1/2 left-0 transform -translate-y-1/2 h-6 w-6">
                    <svg
                      width="27"
                      height="27"
                      viewbox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="26"
                        height="26"
                        rx="7.5"
                        stroke="green"
                      ></rect>
                    </svg>
                  </button>
                  <span className="ml-2 text-sm text-gray-400 leading-3">
                    PayPal
                  </span>
                </label>
              </div>
              <div className="max-w-lg mx-auto">
                <div className="flex flex-wrap mb-6 items-center">
                  <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                    <label className="text-lg text-darkBlueGray-400">
                      Name on card:
                    </label>
                  </div>
                  <div className="w-full md:w-2/3">
                    <input
                      className="w-full px-5 py-3 text-lg leading-9 bg-green-50 border-2 border-green-400 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-xl"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap mb-6 items-center">
                  <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                    <label className="text-lg text-darkBlueGray-400">
                      Credit card number:
                    </label>
                  </div>
                  <div className="w-full md:w-2/3">
                    <input
                      className="w-full px-5 py-3 text-lg leading-9 bg-green-50 border-2 border-green-400 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-xl"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap mb-6 items-center">
                  <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                    <label className="text-lg text-darkBlueGray-400">
                      Expiration:
                    </label>
                  </div>
                  <div className="w-full md:w-2/3">
                    <input
                      className="w-full px-5 py-3 text-lg leading-9 bg-green-50 border-2 border-green-400 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-xl"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-center">
                  <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                    <label className="text-lg text-darkBlueGray-400">
                      CVV:
                    </label>
                  </div>
                  <div className="w-full md:w-1/3">
                    <input
                      className="w-full px-5 py-3 text-lg leading-9 bg-green-50 border-2 border-green-400 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-xl"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/12 lg:w-1/4 px-4">
            <div>
              <h2 className="mb-7 lg:mt-6 text-3xl font-heading font-medium">
                Order summary
              </h2>
              <div className="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl">
                <span>Subtotal</span>
                <span className="flex items-center text-xl">
                  <span className="mr-2 text-base">$</span>
                  <span>710,70</span>
                </span>
              </div>
              <div className="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl">
                <span>Shipping</span>
                <span className="flex items-center text-xl">
                  <span className="mr-2 text-base">$</span>
                  <span>10,00</span>
                </span>
              </div>
              <div className="flex items-center justify-between py-4 px-10 mb-14 leading-8 bg-white font-heading font-medium rounded-3xl">
                <span>Total</span>
                <span className="flex items-center text-xl text-green-700">
                  <span className="mr-2 text-base">$</span>
                  <span>720,70</span>
                </span>
              </div>
              <h4 className="mb-4 text-3xl font-heading font-medium">
                Discount code
              </h4>
              <label className="block mb-3 text-lg text-darkBlueGray-400">
                Apply code:
              </label>
              <div className="relative mb-3 lg:mb-10">
                <input
                  className="flex-grow outline-none px-5 pr-36 py-4 w-full leading-7 bg-white border-2 border-green-500 rounded-3xl"
                  type="text"
                />
                <a
                  className="absolute top-1/2 transform -translate-y-1/2 right-1 -translate-x-px w-auto xl:w-auto py-3 px-8 text-lg leading-7 text-white font-medium tracking-tighter font-heading text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-xl"
                  href="#"
                >
                  Apply
                </a>
              </div>
              <a
                className="inline-block w-full py-5 lg:py-3 px-10 text-lg leading-6 lg:leading-7 text-white font-medium tracking-tighter font-heading text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded-xl"
                href="#"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
