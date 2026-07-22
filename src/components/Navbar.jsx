import { useState, useEffect, useRef } from "react";
import { FaAirbnb, FaGlobe } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed shadow-md top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#FBFBFB] py-4" : "bg-[#FBFBFB] py-6"
      }`}
    >
      <div className="flex justify-between items-start px-12">
        <div className="flex text-4xl font-bold text-[#FF385C] cursor-pointer">
          <FaAirbnb />
          <span className="text-xl text-[#FF385C]">airbnb</span>
        </div>

        <div className="flex flex-col items-center">
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isScrolled
                ? "max-h-0 opacity-0 -translate-y-6"
                : "max-h-20 opacity-100 translate-y-0 mb-6"
            }`}
          >
            <ul className="flex items-center gap-2 text-lg font-medium">
              <li className="flex items-center cursor-pointer pointer-events-none select-none text-black font-medium">
                <video
                  className="w-15 h-15"
                  playsInline
                  autoPlay
                  muted
                  preload="auto"
                  poster="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-bar-icons/original/4aae4ed7-5939-4e76-b100-e69440ebeae4.png?im_w=240"
                >
                  <source
                    src="https://a0.muscache.com/videos/search-bar-icons/webm/house-selected.webm"
                    type="video/webm"
                  />
                </video>

                <span>Homes</span>
              </li>

              <li className="flex items-center cursor-pointer pointer-events-none select-none text-black font-medium">
                <video
                  className="w-15 h-15"
                  playsInline
                  autoPlay
                  muted
                  preload="auto"
                  poster="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-bar-icons/original/4aae4ed7-5939-4e76-b100-e69440ebeae4.png?im_w=240"
                >
                  <source
                    src="https://a0.muscache.com/videos/search-bar-icons/webm/balloon-selected.webm"
                    type="video/webm"
                  />
                </video>
                <span>Experiences</span>
              </li>

              <li className="flex items-center cursor-pointer pointer-events-none select-none text-black font-medium">
                <video
                  className="w-15 h-15"
                  playsInline
                  autoPlay
                  muted
                  preload="auto"
                  poster="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-bar-icons/original/4aae4ed7-5939-4e76-b100-e69440ebeae4.png?im_w=240"
                >
                  <source
                    src="https://a0.muscache.com/videos/search-bar-icons/webm/consierge-selected.webm"
                    type="video/webm"
                  />
                </video>
                <span>Services</span>
              </li>
            </ul>
          </div>

          {/* Search Bar */}
          <div
            className={`flex items-center rounded-full border border-gray-200 bg-white shadow-lg transition-all duration-500 ${
              isScrolled ? "px-4 py-2 gap-4" : "w-[850px] h-[66px]"
            }`}
          >
            {!isScrolled ? (
              <>
                <div className="group flex flex-1 items-center">
                  <div className="w-full rounded-full px-8 py-3 cursor-pointer transition hover:bg-gray-100">
                    <h4 className="text-xs font-semibold">Where</h4>
                    <p className="text-sm text-gray-500">Search destinations</p>
                  </div>
                  <div className="h-8 w-px bg-gray-300"></div>
                </div>

                <div className="group flex flex-1 items-center">
                  <div className="w-full rounded-full px-8 py-3 cursor-pointer transition hover:bg-gray-100">
                    <h4 className="text-xs font-semibold">When</h4>
                    <p className="text-sm text-gray-500">Add dates</p>
                  </div>
                </div>

                <div className="h-8 w-px bg-gray-300"></div>

                <div className="flex flex-[1.2] items-center justify-between rounded-full px-8 py-3 transition hover:bg-gray-100 cursor-pointer">
                  <div>
                    <h4 className="text-xs font-semibold">Who</h4>
                    <p className="text-sm text-gray-500">Add guests</p>
                  </div>

                  <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF385C] text-white transition hover:bg-[#E31C5F]">
                    <FiSearch size={20} />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 font-semibold">
                  <video
                    className="w-8 h-8 pointer-events-none select-none"
                    autoPlay
                    muted
                    playsInline
                  >
                    <source
                      src="https://a0.muscache.com/videos/search-bar-icons/webm/house-selected.webm"
                      type="video/webm"
                    />
                  </video>

                  <span>Anywhere</span>
                </div>
                <div className="h-5 w-px bg-gray-300"></div>

                <span className="font-semibold">Any time</span>

                <div className="h-5 w-px bg-gray-300"></div>

                <span className="text-gray-500">Add guests</span>

                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF385C] text-white">
                  <FiSearch size={14} />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Right */}
        <div>
          <ul className="flex items-center gap-6">
            <li className="cursor-pointer font-medium hover:bg-gray-100 px-4 py-2 rounded-full text-black">
              Become a host
            </li>

            <li className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center cursor-pointer hover:bg-gray-200 text-black">
              <FaGlobe />
            </li>

            <div className="relative">
              <button
                ref={menuRef}
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center hover:bg-gray-200"
              >
                <HiOutlineMenu />
              </button>

              {menuOpen && <MenuDropdown />}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
