import Listings from "../components/Listings";
import { sections } from "../store/listing";

const Home = () => {
  return (
    <>
      {sections.map((section) => (
        <Listings
          key={section.id}
          title={<h2 className="text-[20px] font-semibold">{section.title}</h2>}
          listings={section.listings}
        />
      ))}
    </>
  );
};

export default Home;
