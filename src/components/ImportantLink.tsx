import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContextProvider";
import { FaRegSquareCheck } from "react-icons/fa6";

// Define a union type for language
type Language = "bn" | "en";

interface IImportantLinks {
  bn: string[];
  en: string[];
}

const ImportantLink = () => {
  // Type the language as the union type
  const { language } = useLanguage() as { language: Language };

  // Define the important links object with proper typing
  const importantLinks: IImportantLinks = {
    bn: [
      "রাষ্ট্রপতির কার্যালয়",
      "প্রধানমন্ত্রীর কার্যালয়",
      "মন্ত্রিপরিষদ বিভাগ",
      "বাংলাদেশ কর্মচারী কল্যাণ বোর্ড",
      "জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ",
      "প্রাথমিক ডিজিটাল কন্টেন্ট",
      "জাতীয় পোর্টাল",
    ],

    en: [
      "President's Office",
      "Prime Minister's Office",
      "Cabinet Division",
      "Bangladesh Employee Welfare Board",
      "National Skills Development Authority",
      "Primary Digital Content",
      "National Portal",
    ],
  };

  return (
    <div className="mt-5 md:mt-12">
      {/* Important Links Section */}
      <div className="text-center mb-6 mt-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-[4px] bg-primaryColor px-3 py-3 text-white-50 text-lg md:text-xl font-medium text-center"
        >
          {language === "bn" ? "গুরুত্বপূর্ণ লিংক" : "Important Links"}
        </motion.h1>
      </div>
      <div className="space-y-4">
        {importantLinks[language].map((link: string, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            whileTap={{ scale: 1.12 }}
            className="bg-white-200 p-4 rounded-[4px] border text-black-800 flex items-center gap-2 cursor-pointer"
          >
            <FaRegSquareCheck className="text-primaryColor size-6" />
            <p className="text-sm md:text-[16px] font-medium">{link}</p>
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
        className="flex flex-col items-center justify-center text-secondaryColor mt-5 cursor-pointer bg-white-500 rounded-full px-2 py-2"
      >
        <motion.span
          whileHover={{ color: "#098346" }} // Apply primaryColor on hover
          className="text-sm"
        >
          {language === "bn" ? "সকল লিংক" : "All Link"}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default ImportantLink;
