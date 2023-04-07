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
      link: "prductcategory",
    },
    {
      id: 2,
      imgUrl:
        "https://s.alicdn.com/@sc04/kf/H9084aad5928342d98176f560b0a984c2I.jpg_960x960.jpg",
      name: "hat",
      alt: "hat",

      link: "prductcategory",
    },
    {
      id: 3,
      imgUrl:
        "https://s.alicdn.com/@sc04/kf/Hd03a697abc7c451ab7edbba015efb6e46.jpg_960x960.jpg",
      name: "uniform",
      alt: "uniform",

      link: "prductcategory",
    },
    {
      id: 4,
      imgUrl:
        "https://s.alicdn.com/@sc04/kf/H598310bd5b254b78a39a9d21bd26cd20H.jpg_960x960.jpg",
      name: "bags",
      alt: "bags ",
      link: "prductcategory",
    },
    {
      id: 5,
      imgUrl:
        "https://s.alicdn.com/@sc04/kf/H263720e594d44e81bb6f2baee423fc1cY.jpg_960x960.jpg",
      name: "equipments",
      alt: "equipments",
      link: "prductcategory",
    },
    {
      id: 6,
      imgUrl:
        "https://s.alicdn.com/@sc04/kf/H2e35deded8094fd2b7fb2e0988ab860bs.jpg_960x960.jpg",
      name: "outdoors",
      alt: "outdoor",
      link: "prductcategory",
    },
  ];
  return (
    <>
      <section className="text-gray-700">
        <div className="container px-2 py-14 mx-auto">
          <div className="flex flex-wrap -m-4 ">
            {/**categories */}
            {category.map(({ id, imgUrl, name, alt, link }) => (
              <div key={id} className=" lg:w-1/3 w-1/2 relative  group ">
                <Link to={`${link}`}>
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
