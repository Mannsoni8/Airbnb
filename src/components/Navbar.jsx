import { FaAirbnb, FaGlobe } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-start px-12 py-6 bg-[#ebe0e0] text-white">
      <div className="text-3xl font-bold text-[#FF385C] cursor-pointer">
        <FaAirbnb />
      </div>

      <div className="flex flex-col items-center gap-6">
        <div>
          <ul className="flex items-center gap-10 text-lg font-medium">
            <li className="cursor-pointer hover:text-white text-gray-500">
              Homes
            </li>

            <li className="cursor-pointer hover:text-white text-gray-500">
              Experiences
            </li>

            <li className="cursor-pointer hover:text-white text-gray-500">
              Services
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center gap-20 bg-[#2A2A2A] border border-gray-700 rounded-full px-2 py-2   shadow-lg">
          <div className="px-8 border-r border-gray-600">
            <h4 className="text-sm font-semibold">Where</h4>
            <p className="text-gray-400 text-sm">Search destinations</p>
          </div>

          <div className="px-8 border-r border-gray-600">
            <h4 className="text-sm font-semibold">When</h4>
            <p className="text-gray-400 text-sm">Add dates</p>
          </div>

          <div className="px-8">
            <h4 className="text-sm font-semibold">Who</h4>
            <p className="text-gray-400 text-sm">Add guests</p>
          </div>

          <button className="ml-6 w-12 h-12 rounded-full bg-[#FF385C] flex items-center justify-center hover:bg-[#E31C5F] transition">
            <FiSearch />
          </button>
        </div>
      </div>

      <div>
        <ul className="flex items-center gap-6">
          <li className="cursor-pointer font-medium hover:bg-[#2A2A2A] px-4 py-2 rounded-full transition text-amber-700">
            Become a host
          </li>

          <li className="w-10 h-10 rounded-full bg-[#2A2A2A] flex justify-center items-center cursor-pointer hover:bg-[#3A3A3A]">
            <FaGlobe />
          </li>

          <li className="w-10 h-10 rounded-full bg-[#2A2A2A] flex justify-center items-center cursor-pointer hover:bg-[#3A3A3A]">
            <HiOutlineMenu />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
