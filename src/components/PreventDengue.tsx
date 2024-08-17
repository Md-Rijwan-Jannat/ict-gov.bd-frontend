import { useLanguage } from "@/context/LanguageContextProvider";
import { Language } from "@/types";
import { motion } from "framer-motion";

const PreventDengue = () => {
  // Use language context to determine the current language
  const { language } = useLanguage() as { language: Language };

  return (
    <div className="mt-5 md:mt-12">
      {/* Animated Title */}
      <div className="rounded-[4px] bg-primaryColor px-3 py-3 text-white-50 text-lg md:text-xl font-medium text-center ">
        {language === "bn"
          ? "ডেঙ্গু প্রতিরোধে করণীয়"
          : "What to do to prevent dengue"}
      </div>

      {/* Emergency Hotline Image */}
      <div className="flex items-center justify-center ">
        <motion.img
          src="https://ictd.gov.bd/sites/default/files/files/admin.portal.gov.bd/npfblock//dengu.jpg"
          alt="Emergency Hotline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="w-full max-w-sm md:max-w-md mt-3"
        />
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
          {language === "bn" ? "এগিয়ে যাও" : "Go ahead"}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default PreventDengue;
