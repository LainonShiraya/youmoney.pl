import AboutPlatform from "../components/AboutUs/AboutPlatform/AboutPlatform";
import About from "../components/AboutUs/About/About";
import Footer from "../components/MainPage/Footer/Footer";
import Navbar from "../components/AboutUs/Navbar/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../App";

const AboutUs = () => {
    const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme === "light" ? "bg-white" : "bg-darkMode"}`}
    >
      <div className="w-11/12 ss:w-4/6 sm:w-10/12 mx-auto wrapper">
        <Navbar />
        <About />
        <AboutPlatform />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
