import { useLanguage } from "@/context/LanguageContextProvider";
import { Input } from "../ui/input";
import { BsSearch } from "react-icons/bs";
import Navigation from "./Navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../public/ict.gov.bd.logo.png";

const Header = () => {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-2 py-4 bg-gradient-to-r from-primaryColor/95 to-secondaryColor/80 w-full lg:h-[152px] relative">
      <div className="flex items-center gap-3 justify-between">
        <div className="flex gap-2 items-center">
          <img className="w-10 md:w-16" src={logo} alt="ICT Logo" />
          <h3 className="whitespace-nowrap text-white-50 text-xs md:text-2xl mr-2">
            {language === "bn" ? (
              <>
                গণপ্রজাতন্ত্রী বাংলাদেশ
                <br className="lg::hidden" />
                সরকার
              </>
            ) : (
              <>
                Government of the People's <br className="lg:hidden" /> Republic
                of Bangladesh
              </>
            )}
          </h3>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex gap-2 md:gap-3 items-center relative w-full md:w-auto">
            <Input
              type="text"
              placeholder={language === "bn" ? "অনুসন্ধান" : "Search"}
              className="w-full lg:w-[400px] px-1 h-[35px] md:h-auto md:px-4  md:py-2 text-[10px] md:text-sm rounded border border-white-500 text-white-500 placeholder:text-white-500"
            />
            <BsSearch className="absolute right-2 md:right-3 text-white-500 size-3 md:size-4" />
          </div>
          <button
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? (
              <FaTimes className="size-4 text-white-50" />
            ) : (
              <FaBars className="size-4 text-white-50" />
            )}
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center absolute">
        <Navigation isMenuOpen={isMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
