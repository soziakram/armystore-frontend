import React from "react";
import boots from "../../asset/image/boots.JPG";
import boots1 from "../../asset/image/boots1.JPG";

import bootmsh from "../../asset/image/bootmsh.JPG";
import boots3 from "../../asset/image/boots3.JPG";
import boots2 from "../../asset/image/boots2.JPG";
const Product = () => {
  return (
    <>
      <section className=" p-10 w-screen sm:w-auto flex flex-row overflow-hidden justify-around">
        <section className=" dark:bg-gray-800 dark:text-gray-50">
          <div className="container flex flex-row p-4 mx-auto md:flex-row">
            <div className="flex flex-col">
              <img
                alt=""
                className="w-24 h-24 rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src={boots}
              />
              <img
                alt=""
                className="w-24 h-24  rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src={bootmsh}
              />
              <img
                alt=""
                className="w-24 h-24  rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src={boots2}
              />
              <img
                alt=""
                className="w-24 h-24 rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src={boots3}
              />
            </div>
            <div className="border border-b-gray-500">
              <img
                src={boots1}
                alt=""
                className="w-full h-full col-span-2 ow-span-2 shadow-sm min-h-96 md:col-start-3 md:row-start-1  dark:bg-gray-500 aspect-square"
              />
            </div>
          </div>
        </section>

        <div className="w-full lg:w-1/2 px-4">
          <div className="max-w-md mb-6">
            <h2 className="mt-6 mb-4 text-3xl md:text-7xl lg:text-4xl font-heading font-medium">
              khaki hot style jungle boot
            </h2>
            <p className="flex items-center mb-6">
              <span className="mr-2 text-sm text-black font-medium">$</span>
              <span className="text-3xl text-black font-medium">44.90</span>
            </p>
          </div>
          <div className="flex mb-6 items-center">
            <div className="inline-flex mr-4">
              <button className="mr-1">
                <svg
                  width="20"
                  height="20"
                  viewbox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                    fill="#C1C9D3"
                  ></path>
                </svg>
              </button>
              <button className="mr-1">
                <svg
                  width="20"
                  height="20"
                  viewbox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                    fill="#C1C9D3"
                  ></path>
                </svg>
              </button>
              <button className="mr-1">
                <svg
                  width="20"
                  height="20"
                  viewbox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                    fill="#C1C9D3"
                  ></path>
                </svg>
              </button>
              <button className="mr-1">
                <svg
                  width="20"
                  height="20"
                  viewbox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                    fill="#C1C9D3"
                  ></path>
                </svg>
              </button>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewbox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                    fill="#FFD93D"
                  ></path>
                </svg>
              </button>
            </div>
            <span className="text-md text-gray-400">4</span>
          </div>
          <div className="mb-6">
            <h4 className="mb-3 font-heading font-medium">
              <span>Color:</span>
              <span className="text-gray-400">Silver</span>
            </h4>
            <button className="inline-flex items-center justify-center p-1 rounded-full border border-gray-300">
              <div className="w-6 h-6 rounded-full bg-white"></div>
            </button>
            <button className="inline-flex items-center justify-center p-1 rounded-full border border-transparent">
              <div className="w-6 h-6 rounded-full bg-orange-800"></div>
            </button>
            <button className="inline-flex items-center justify-center p-1 rounded-full border border-transparent">
              <div className="w-6 h-6 rounded-full bg-blue-900"></div>
            </button>
            <button className="inline-flex items-center justify-center p-1 rounded-full border border-transparent">
              <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
            </button>
          </div>
          <div className="mb-10">
            <h4 className="mb-3 font-heading font-medium">Qty:</h4>

            <input
              className="w-24 px-3 py-2 text-center bg-white border-2 border-green-500 outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 "
              type="text"
              placeholder="1"
            />
          </div>
          <div className="flex flex-wrap -mx-2 mb-12">
            <div className="w-full md:w-1/2 h-auto px-2 mb-2 md:mb-0 j">
              <a
                className=" block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-black text-center bg-green-500 focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 hover:bg-green-600 "
                href="/"
              >
                Add to cart
              </a>
            </div>
            <div className="w-full md:w-1/2 h-auto px-2">
              <a
                className="flex w-full py-4 px-2 items-center justify-around leading-8 font-heading font-medium tracking-tighter text-xl text-center text-white  bg-black focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 "
                href="#"
              >
                <span className="mr-2">Wishlist</span>
                <svg
                  width="23"
                  height="22"
                  viewbox="0 0 23 22"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3235 20.1324L2.52488 10.8515C1.75232 10.0706 1.24237 9.06367 1.06728 7.97339C0.8922 6.88311 1.06086 5.76477 1.54936 4.7768V4.7768C1.91837 4.03089 2.45739 3.3843 3.12201 2.89033C3.78663 2.39635 4.55781 2.06911 5.37203 1.93558C6.18626 1.80205 7.0202 1.86605 7.80517 2.1223C8.59013 2.37855 9.30364 2.81972 9.88691 3.40946L11.3235 4.86204L12.7601 3.40946C13.3434 2.81972 14.0569 2.37855 14.8419 2.1223C15.6269 1.86605 16.4608 1.80205 17.275 1.93558C18.0892 2.06911 18.8604 2.39635 19.525 2.89033C20.1897 3.3843 20.7287 4.03089 21.0977 4.7768V4.7768C21.5862 5.76477 21.7549 6.88311 21.5798 7.97339C21.4047 9.06367 20.8947 10.0706 20.1222 10.8515L11.3235 20.1324Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className=" pl-24 m-20 text-black mt-10">
        <h3 className=" text-5xl text-black ">Descripion</h3>
        <p>
          introducing our rugged and durable army boot,
          <br />
          the perfect footwear for ant outdoor adventure <br />
          or challenging terrain. made from high-quality materials, <br />
          this boot is designed to withstand even toughest conditions and
          provide
          <br />
          maxmimum support and protectionfor your feet
        </p>
      </section>
    </>
  );
};

export default Product;
