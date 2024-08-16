import { useLanguage } from "@/context/LanguageContextProvider";
import { Language } from "@/types";
import { motion } from "framer-motion";

const EmergencyHotline = () => {
  // Use language context to determine the current language
  const { language } = useLanguage() as { language: Language };

  return (
    <div className="mt-5 md:mt-10">
      {/* Animated Title */}
      <div className="rounded-[4px] bg-primaryColor px-3 py-3 text-white-50 text-sm md:text-xl font-semibold text-center ">
        {language === "bn" ? "জরুরি হটলাইন" : "Emergency Hotline"}
      </div>

      {/* Emergency Hotline Image */}
      <motion.img
        src="https://ictd.portal.gov.bd/sites/default/files/files/ictd.portal.gov.bd/npfblock//hotline_v.2_bn.png"
        alt="Emergency Hotline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="w-full max-w-sm md:max-w-md"
      />
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
          {language === "bn" ? "এগিয়ে যাও" : "Go ahead"}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default EmergencyHotline;
