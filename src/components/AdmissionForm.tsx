import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContextProvider";

const AdmissionForm = () => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      whileTap={{ scale: 1.12 }}
      className="text-sm md:text-[16px] rounded-[4px] bg-white-200 border px-3 py-3 50 text-center cursor-pointer mt-5"
    >
      {language === "bn"
        ? "অফিস সংযুক্তির আবেদন ফরম"
        : "Office Attachment Application Form"}
    </motion.div>
  );
};

export default AdmissionForm;
