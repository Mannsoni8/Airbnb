import { FaHeart, FaStar } from "react-icons/fa";

const ListingCard = ({ image, title, location, price, rating }) => {
  return (
    <div className="w-[200px] shrink-0 cursor-pointer group">
      <div className="relative h-[180px] overflow-hidden rounded-[20px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover duration-300 group-hover:scale-105"
        />

        <div className="absolute left-3 top-3 rounded-full bg-white px-4 py-2 text-[10px] font-semibold shadow-md">
          Guest favourite
        </div>

        <button className="absolute right-3 top-3">
          <FaHeart
            className="text-[15px] text-white"
            style={{
              filter: "drop-shadow(0 1px 3px rgba(0,0,0,.7))",
            }}
          />
        </button>
      </div>

      <div className="mt-3">
        <div className="flex justify-between">
          <h3 className="font-semibold text-[17px] leading-5 truncate">
            {title}
          </h3>

          <div className="flex items-center gap-1">
            <FaStar className="text-[12px]" />

            <span className="text-[15px]">{rating}</span>
          </div>
        </div>

        <p className="text-[15px] text-gray-500">{location}</p>

        <p className="mt-1 text-[16px]">
          <span className="font-semibold">₹{price}</span> for 2 nights
        </p>
      </div>
    </div>
  );
};

export default ListingCard;
