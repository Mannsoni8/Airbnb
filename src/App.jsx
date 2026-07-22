import Footer from "./components/Footer";
import Home from "./components/Home";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-wite">
      <div>
        <Navbar />
      </div>
      <div className=" mt-[15%] mx-[3%]">
        <Home />
        <Footer />
      </div>
    </div>
  );
};

export default App;
