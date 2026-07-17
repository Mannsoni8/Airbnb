import React, { useState } from "react";
import { MdOutlineVilla, MdOutlinePool, MdOutlineCabin } from "react-icons/md";
import { FaUmbrellaBeach, FaMountain, FaTree } from "react-icons/fa";
import { GiIsland, GiCampingTent } from "react-icons/gi";

const categories = [
  {
    id: 1,
    title: "Amazing Views",
    icon: <FaMountain />,
  },
  {
    id: 2,
    title: "Beachfront",
    icon: <FaUmbrellaBeach />,
  },
  {
    id: 3,
    title: "Cabins",
    icon: <MdOutlineCabin />,
  },
  {
    id: 4,
    title: "Camping",
    icon: <GiCampingTent />,
  },
  {
    id: 5,
    title: "Islands",
    icon: <GiIsland />,
  },
  {
    id: 6,
    title: "Pools",
    icon: <MdOutlinePool />,
  },
  {
    id: 7,
    title: "Treehouses",
    icon: <FaTree />,
  },
  {
    id: 8,
    title: "Villas",
    icon: <MdOutlineVilla />,
  },
];

const Categories = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-[#1C1C1C] text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center gap-10 overflow-x-auto px-8 py-5 scrollbar-hide">
        {categories.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex flex-col items-center min-w-fit gap-2 pb-2 transition-all duration-300
            ${
              active === item.id
                ? "text-white border-b-2 border-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <span className="text-2xl">{item.icon}</span>

            <span className="text-sm whitespace-nowrap">{item.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
