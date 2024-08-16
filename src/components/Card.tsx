import { useLanguage } from "@/context/LanguageContextProvider";
import { Language } from "@/types";
import { FaBridgeWater } from "react-icons/fa6";
import { motion } from "framer-motion";

const Card = () => {
  const { language } = useLanguage() as { language: Language };
  return (
    <div className="mt-5 md:mt-12">
      <div className="mt-4">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          whileTap={{ scale: 0.95 }}
          className="flex gap-2 items-center bg-white-200 rounded-[4px] text-black-800 text-sm md:text-[16px] border px-3 py-3 cursor-pointer"
        >
          <FaBridgeWater className="size-6 text-primaryColor" />
          <h2>
            {language === "bn"
              ? "সেতুতে ইলেকট্রনিক টোল লেন ব্যবহারে 10% ছাড়"
              : "10% discount on using electronic toll lanes on bridges"}
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
