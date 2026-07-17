import React from "react";

const SeeAllCards = ({ images }) => {
  return (
    <div className="w-[190px] h-[170px] flex-shrink-0 cursor-pointer rounded-3xl bg-white shadow-sm hover:shadow-lg transition duration-300 flex flex-col items-center justify-center">
      <div className="relative w-36 h-24">
        <img
          src={images[0]}
          alt=""
          className="absolute left-8 top-0 w-20 h-20 rounded-xl object-cover border-4 border-white shadow-md rotate-6"
        />

        <img
          src={images[1]}
          alt=""
          className="absolute left-0 top-5 w-20 h-20 rounded-xl object-cover border-4 border-white shadow-md -rotate-6 z-10"
        />

        <img
          src={images[2]}
          alt=""
          className="absolute left-16 top-4 w-20 h-20 rounded-xl object-cover border-4 border-white shadow-md rotate-3"
        />
      </div>

      <h3 className="mt-10 font-semibold text-gray-800">See all</h3>
    </div>
  );
};

export default SeeAllCards;
