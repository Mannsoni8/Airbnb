import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ListingCard from "./ListingCard";
import SeeAllCards from "./SeeAllCards";
import { listings } from "../store/listing";

const Listings = ({ category }) => {
  const data = listings[category];
  const slider = useRef();

  const slideLeft = () => {
    slider.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    slider.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-[1700px] px-8 py-10">
      {/* Heading */}

      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-[20px] font-semibold">
            Popular homes in Gurgaon District
          </h2>

          <FaChevronRight className="text-xl" />
        </div>

        {/* Buttons */}

        <div className="flex gap-3">
          <button
            onClick={slideLeft}
            className="flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow hover:scale-105 border-none"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={slideRight}
            className="flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow hover:scale-105 border-none"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Slider */}

      <div ref={slider} className="flex gap-2 overflow-x-hidden scroll-smooth">
        {listings.map((item) => (
          <ListingCard key={item.id} {...item} />
        ))}
        <SeeAllCards
          images={[listings[0].image, listings[1].image, listings[2].image]}
        />
      </div>
    </section>
  );
};

export default Listings;
