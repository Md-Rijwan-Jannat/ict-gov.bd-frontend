import { useLanguage } from "@/context/LanguageContextProvider";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { PiEmptyBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { Language } from "@/types";

const PollingModal = () => {
  const { language } = useLanguage() as { language: Language };

  const titles = {
    bn: "অনলাইন পোলিং",
    en: "Online Polling",
  };

  const messages = {
    bn: "এই মুহূর্তে কোনো পোল চলমান নেই",
    en: "No polls are currently active",
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          className="w-10 md:w-16"
          src="https://polling.portal.gov.bd/poll-icon.gif"
          alt="Polling Icon"
        />
      </DialogTrigger>
      <DialogContent className="bg-white-50 rounded-lg shadow-lg p-6">
        <motion.div
          className="grid gap-4 py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="bg-primaryColor px-3 py-3 text-white-50 text-sm md:text-xl font-semibold text-center rounded-md">
            {titles[language]}
          </h2>
          <div className="flex items-center justify-center">
            <PiEmptyBold className="text-white-600 text-4xl animate-pulse size-20" />
          </div>
          <p className="text-center text-gray-700 text-sm md:text-base">
            {messages[language]}
          </p>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default PollingModal;
