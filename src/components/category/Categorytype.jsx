import React from "react";
import boots from "../../asset/image/boots.JPG";
import { Link } from "react-router-dom";

const Categorytype = () => {
  const category = [
    {
      id: 1,
      imgUrl: boots,
      name: "boots",
      alt: "boots",
    },
    {
      id: 2,
      imgUrl: boots,
      name: "bags",
      alt: "bags",
    },
    {
      id: 3,
      imgUrl: boots,
      name: "uniform",
      alt: "uniform",
    },
    {
      id: 4,
      imgUrl: boots,
      name: "pants & jins",
      alt: "pants ",
    },
    {
      id: 5,
      imgUrl: boots,
      name: "guns",
      alt: "guns",
    },
    {
      id: 6,
      imgUrl: boots,
      name: "outdoors",
      alt: "outdoor",
    },
  ];
  return (
    <>
      <section className="text-gray-500">
        <div className="container px-2 py-14 mx-auto">
          <div className="flex flex-wrap -m-4 ">
            {/**categories */}
            {category.map(({ id, imgUrl, name, alt }) => (
              <div key={id} className=" lg:w-1/3 w-1/2 relative  group ">
                <Link to="/product">
                  <img
                    src={imgUrl}
                    alt={alt}
                    className="object-cover lg:h-full md:h-36 h-60 w-full  transition-all duration-300 group-hover:bg-gray-700 group-hover:bg-opacity-10 group-hover:blur-sm"
                  />
                  <div className="absolute inset-0 bg-green-100 opacity-0 hover:opacity-50 transition-opacity">
                    <h1 className=" sm:text-2xl text-xl font-medium uppercase text-black absolute inset-0 flex justify-center items-center ">
                      {name}
                    </h1>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categorytype;
