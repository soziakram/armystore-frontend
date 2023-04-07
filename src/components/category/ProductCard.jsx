import React from "react";
import boots from "../../asset/image/boots.JPG";

import { Link } from "react-router-dom";
const ProductCard = () => {
  const category = [
    {
      id: 1,
      imgUrl: boots,
      name: "boot",
      category: "boots",
      alt: "boots",
      link: "product",
      price: "19$",
    },
    {
      id: 2,
      imgUrl:
        "https://s.alicdn.com/@sc04/kf/H9084aad5928342d98176f560b0a984c2I.jpg_960x960.jpg",
      name: "helmet",
      category: "hat",
      alt: "hat",
      price: "19$",
    },
    {
      id: 3,
      imgUrl:
        "https://s.alicdn.com/@sc04/kf/Hd03a697abc7c451ab7edbba015efb6e46.jpg_960x960.jpg",
      name: "uniform",
      category: "uniforms",
      alt: "uniforms",
      price: "19$",
    },
    {
      id: 4,
      imgUrl:
        "https://s.alicdn.com/@sc04/kf/H598310bd5b254b78a39a9d21bd26cd20H.jpg_960x960.jpg",
      name: "bags",
      category: "bags",
      alt: "bags ",
      price: "19$",
    },
    {
      id: 5,
      imgUrl:
        "https://s.alicdn.com/@sc04/kf/H263720e594d44e81bb6f2baee423fc1cY.jpg_960x960.jpg",
      name: "wquipment",
      category: "equipments",
      alt: "equipments",
      price: "19$",
    },
  
  ];

  return (
    <section className="text-gray-700">
      <div className="container px-2 py-14 mx-auto">
        <div className="flex flex-wrap -m-4 ">
          {category.map(({ id, imgUrl, name, category, alt, link, price }) => (
            <div className="max-w-xs  shadow-md dark:bg-gray-900 dark:text-gray-100">
              <img
                src={imgUrl}
                alt=""
                className="object-cover object-center w-full  h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-extrabold bold tracking-wide">
                    {name}
                  </h2>
                  <h2 className="text-3xl font-semibold tracking-wide">
                    {category}
                  </h2>
                  <p className="dark:text-gray-100 text-xl">{price}</p>
                </div>

                <div className="flex flex-wrap ">
                  <div className="w-full md:w-1/2 h-auto ">
                    <Link
                      className=" block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-black text-center bg-green-500 focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 hover:bg-green-600 "
                      to="/product"
                    >
                      Add to cart
                    </Link>
                  </div>
                  <div className="w-full md:w-1/2 h-auto ">
                    <a
                      className="flex w-full py-4 px-2 items-center justify-around leading-8 font-heading font-medium tracking-tighter text-xl text-center text-white  bg-black focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 "
                      href="#"
                    >
                      <span className="mr-2]">Wishlist</span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
