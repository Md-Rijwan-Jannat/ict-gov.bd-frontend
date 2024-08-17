import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContextProvider";
import { FaRegSquareCheck } from "react-icons/fa6";

// Define a union type for language
type Language = "bn" | "en";

// Define the IService interface
interface IService {
  bn: string[];
  en: string[];
}

const EService = () => {
  // Type the language as the union type
  const { language } = useLanguage() as { language: Language };

  // Define the services object with proper typing
  const services: IService = {
    bn: [
      "ওয়েব মেইল",
      "বৃত্তি ও আইসিটি উদ্ভাবনী অনুদান",
      "ন্যাশনাল এন্টারপ্রাইজ আর্কিটেকচার",
      "সিআইআরটি",
      "অনলাইন নিয়োগ সিস্টেম",
      "ওয়ান স্টপ সার্ভিস (বাংলাদেশ হাইটেক পার্ক কর্তৃপক্ষ)",
    ],

    en: [
      "Web Mail",
      "Scholarships and ICT Innovation Grants",
      "National Enterprise Architecture",
      "CIRT",
      "Online Recruitment System",
      "One Stop Service (Bangladesh Hi-Tech Park Authority)",
    ],
  };

  return (
    <div className="mt-5 md:mt-12">
      <div className="text-center mb-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-[4px] bg-primaryColor px-3 py-3 text-white-50 text-lg md:text-xl font-medium text-center "
        >
          {language === "bn" ? "অভ্যন্তরীণ ই-সেবাসমূহ" : "Internal E-Services"}
        </motion.h1>
      </div>
      <div className="space-y-4">
        {services[language].map((service: string, index: number) => (
          <motion.div
            key={index} // Add a unique key for each item
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            whileTap={{ scale: 1.12 }}
            className="bg-white-200 p-4 rounded-[4px] border text-black-800 text-sm md:text-[16px] flex items-center gap-2 cursor-pointer"
          >
            <FaRegSquareCheck className="text-primaryColor size-6" />
            <p className="text-sm md:text-[16px] font-medium">{service}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        className="flex flex-col items-center justify-center text-secondaryColor mt-5 cursor-pointer bg-white-300 rounded-full px-2 py-2 border border-black-400"
      >
        <motion.span
          whileHover={{ color: "#098346" }} // Apply primaryColor on hover
          className="text-sm"
        >
          {language === "bn" ? "সকল" : "All"}
        </motion.span>
      </motion.div>
      <div className="text-center mt-5 md:mt-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          className="rounded-[4px] bg-white-200 border px-3 py-3 50 text-center cursor-pointer mt-5 text-sm md:text-[16px]"
        >
          {language === "bn" ? "কেন্দ্রীয় ই-সেবা" : "Central E-Services"}
        </motion.h1>
      </div>
    </div>
  );
};

export default EService;
