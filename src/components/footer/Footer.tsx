import { useLanguage } from "@/context/LanguageContextProvider";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gradient-to-r from-primaryColor/95 to-secondaryColor/80 text-white-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm">
            <li className="border-r border-white-200 h-[40px] pr-3 flex items-center justify-center">
              {language === "bn" ? "সাইটম্যাপ" : "Sitemap"}
            </li>
            <li className="border-r border-white-200 h-[40px] pr-3 flex items-center justify-center">
              {language === "bn" ? "গোপনীয়তার নীতিমালা" : "Privacy Policy"}
            </li>
            <li className="border-r border-white-200 h-[40px] pr-3 flex items-center justify-center">
              {language === "bn" ? "যোগাযোগ" : "Contact"}
            </li>
            <li className="border-r border-white-200 h-[40px] pr-3 flex items-center justify-center">
              {language === "bn" ? "সচরাচর জিজ্ঞাসা" : "FAQs"}
            </li>
            <li className="h-[40px] flex items-center justify-center">
              {language === "bn" ? "ব্যবহারের শর্তাবলি" : "Terms of Use"}
            </li>
          </ul>
          <div className="mt-8 md:mt-0 text-center md:text-right">
            <h4 className="text-lg font-semibold mb-2">
              {language === "bn" ? "যোগাযোগ করুন" : "Contact Us"}
            </h4>
            <p className="text-xs">
              {language === "bn"
                ? "ই-মেইল: info@example.com | ফোন: +৮৮-০১২৩৪৫৬৭৮৯"
                : "Email: info@example.com | Phone: +88-0123456789"}
            </p>
            <div className="flex gap-4 justify-center md:justify-end mt-4">
              <FaFacebookF className="cursor-pointer hover:text-gray-400" />
              <FaTwitter className="cursor-pointer hover:text-gray-400" />
              <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
              <FaInstagram className="cursor-pointer hover:text-gray-400" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white-200 pt-4">
          <p className="text-xs">
            {language === "bn"
              ? "পরিকল্পনা ও বাস্তবায়নে: মন্ত্রিপরিষদ বিভাগ, এটুআই, বিসিসি, ডিওআইসিটি ও বেসিস। কারিগরি সহায়তায়: np-logo-set।"
              : "Designed & Developed by: Cabinet Division, a2i, BCC, DoICT, & BASIS. Technical support by: np-logo-set."}
          </p>
          <img
            className="w-[200px] mt-4 md:mt-0"
            src="https://ictd.gov.bd/themes/responsive_npf/img/np-logo-set.png"
            alt="Technical Support"
          />
        </div>
      </div>
      <div className="bg-white-500 text-black-900 text-[10px] md:text-sm px-2 py-3 text-center">
        <p>
          {language === "bn"
            ? "সাইটটি শেষ হাল-নাগাদ করা হয়েছে: ২০২৪-০৮-১৫ ১২:৩৮:৫০"
            : "Site last updated: 2024-08-15 12:38:50."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
