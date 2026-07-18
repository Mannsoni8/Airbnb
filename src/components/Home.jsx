import Listings from "../components/Listings";
import { sections } from "../store/listing";

const Home = () => {
  return (
    <>
      {sections.map((section) => (
        <Listings
          key={section.id}
          title={section.title}
          listings={section.listings}
        />
      ))}
    </>
  );
};

export default Home;
