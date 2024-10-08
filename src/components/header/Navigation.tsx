import { useState } from "react";
import { FaChevronDown, FaHome } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContextProvider";
import { Section } from "@/types";
import { texts } from "./NavData";

interface NavigationProps {
  isMenuOpen: boolean;
}

const Navigation = ({ isMenuOpen }: NavigationProps) => {
  const { language } = useLanguage();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuToggle = (key: string) => {
    setOpenMenu((prevOpenMenu) => (prevOpenMenu === key ? null : key));
  };

  return (
    <nav className="relative mt-4 z-50 w-full mx-2 mr-2">
      <div
        className={`w-full bg-white-50 rounded -ml-2 px-3 py-1 ${
          isMenuOpen ? "block" : "hidden"
        } lg:block`}
      >
        <ul className="flex flex-col justify-start items-start lg:flex-row text-[10px] md:text-sm w-[325px] lg:w-full whitespace-nowrap">
          <li className="flex items-center">
            <button className="flex items-center space-x-2 p-2">
              <FaHome className="size-6" />
            </button>
          </li>
          {Object.entries(texts[language]).map(([key, sections]) => (
            <li
              key={key}
              className="relative group"
              onMouseEnter={() => setOpenMenu(key)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                onClick={() => handleMenuToggle(key)}
                className="flex items-center space-x-2 p-2 hover:bg-white-300 rounded-[3px] transition-colors duration-500 ease-in-out"
              >
                <span className="text-[10px] md:text-sm">
                  {key === "sections1"
                    ? language === "en"
                      ? "About Us"
                      : "আমাদের সম্পর্কিত"
                    : key === "sections2"
                    ? language === "en"
                      ? "Subordinate Offices/Agencies"
                      : "অধীনস্থ দপ্তর/অফিস/সংস্থা"
                    : key === "sections3"
                    ? language === "en"
                      ? "Projects/Programs"
                      : "প্রকল্প/কর্মসূচি"
                    : key === "sections4"
                    ? language === "en"
                      ? "Gallery"
                      : "গ্যালারি"
                    : key === "sections5"
                    ? language === "en"
                      ? "Laws/Regulations"
                      : "আইন/নীতিমালা"
                    : key === "sections6"
                    ? language === "en"
                      ? "e-Services"
                      : "ই-সেবা"
                    : language === "en"
                    ? "Contact & Feedback"
                    : "যোগাযোগ ও মতামত"}
                </span>
                <FaChevronDown
                  className={`transition-transform font-normal text-[10px] text-black-900 ${
                    openMenu === key ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMenu === key && (
                <div className="absolute top-full left-0 md:p-3 z-20">
                  <ul className=" bg-white-50 rounded-[3px] lg:flex">
                    {sections.map((section: Section, sectionIdx: number) => (
                      <div key={sectionIdx} className="p-2 flex-2">
                        <li className="font-bold mb-2 whitespace-nowrap text-[10px] md:text-sm">
                          {section.title}
                        </li>
                        {section.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="my-1 border-b border-gray-200 hover:bg-white-400 rounded-[3px] transition-colors duration-300 ease-in-out px-2 py-1 whitespace-nowrap text-[10px] md:text-sm"
                          >
                            {item}
                          </li>
                        ))}
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
