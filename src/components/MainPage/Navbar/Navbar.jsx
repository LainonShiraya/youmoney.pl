// import { useState, useEffect } from "react";
import darkLogo from "../../../assets/MainPage/logo/darkLogo.svg";
import lightLogo from "../../../assets/MainPage/logo/lightLogo.svg";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section >
      <div className="bg-transparent">
        <div className="flex justify-between py-[15px] medium">
          <a href="/">
            <img
              className="h-[54px]"
              src={theme === "light" ? darkLogo : lightLogo}
              alt="Logo"
            />
          </a>
          <div className="text-lightGrey flex gap-[50px] self-center">
            <a
              className="hover:text-blue duration-300 hidden md:block"
              href="/about"
            >
              O youmoney
            </a>
            <a
              className="hover:text-blue duration-300 hidden md:block"
              href="/how"
            >
              Jak to działa
            </a>
          </div>
          <div className="self-center hidden sm:block">
            <a href="/step1/2000/30">
              <button
                className={`${theme === "light" ? "hover:border-darkGrey hover:text-darkGrey" : "hover:border-darkModeBlueButton hover:text-darkModeBlueButton"} text-blue border-[2px] border-blue px-[20px] py-[10px] rounded-xl  duration-300`}
              >
                Weź pożyczkę
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
