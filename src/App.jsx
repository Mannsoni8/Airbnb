import Footer from "./components/Footer";
import Listings from "./components/Listings";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-wite">
      <div>
        <Navbar />
      </div>
      <div className=" mt-[12%] mx-[3%]">
        <Listings />
        <Listings />

        <Footer />
      </div>
    </div>
  );
};

export default App;
