import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Culture from "./pages/Culture";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
    className="h-full overflow-x-hidden bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url('/Background Pattern.svg')`, 
    }}
  >
      <Navbar />
      <div className="h-screen">
        <Home />
      </div>
      <div className="">
        <About />
      </div>
      <div className="">
        <Work />
      </div>
      <div className="">
        <Projects />
      </div>
      <div className="">
        <Culture />
      </div>
      <Footer />
    </div>
  );
}

export default App;
