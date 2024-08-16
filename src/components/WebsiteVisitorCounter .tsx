import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContextProvider";

interface IVisitorData {
  bn: {
    today: number;
    yesterday: number;
    all: number;
    online: number;
  };
  en: {
    today: number;
    yesterday: number;
    all: number;
    online: number;
  };
}

type Language = "bn" | "en";

const VisitorCounterTable = () => {
  // Use language context to determine the current language
  const { language } = useLanguage() as { language: Language };

  // Define visitor data for both languages
  const visitorData: IVisitorData = {
    bn: { today: 245, yesterday: 3841, all: 5331106, online: 16 },
    en: { today: 245, yesterday: 3841, all: 5331106, online: 16 },
  };

  // Define the labels for both languages
  const labels = {
    bn: {
      today: "আজ",
      yesterday: "গতকাল",
      all: "সব",
      online: "অনলাইন",
    },
    en: {
      today: "Today",
      yesterday: "Yesterday",
      all: "All",
      online: "Online",
    },
  };

  return (
    <div className="mt-5 md:mt-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <div className="rounded-[4px] bg-primaryColor px-3 py-3 text-white-50 text-sm md:text-xl font-semibold text-center ">
          {language === "bn"
            ? "ওয়েবসাইট দর্শনার্থী [০৬.১১.২০১৯ তারিখ থেকে কার্যকর]"
            : "Website Visitors [Effective from 06.11.2019]"}
        </div>
        <div className="bg-green-100 text-green-700 text-lg font-semibold py-2 text-center px-2 mt-4">
          {language === "bn" ? "দর্শনার্থী কাউন্টার" : "Visitor Counter"}
        </div>
        <table className="table-auto w-full text-sm md:text-base text-left border">
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">
                {language === "bn" ? labels.bn.today : labels.en.today}
              </td>
              <td className="px-4 py-2 text-right">
                {visitorData[language].today}
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">
                {language === "bn" ? labels.bn.yesterday : labels.en.yesterday}
              </td>
              <td className="px-4 py-2 text-right">
                {visitorData[language].yesterday}
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">
                {language === "bn" ? labels.bn.all : labels.en.all}
              </td>
              <td className="px-4 py-2 text-right">
                {visitorData[language].all}
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                {language === "bn" ? labels.bn.online : labels.en.online}
              </td>
              <td className="px-4 py-2 text-right">
                {visitorData[language].online}
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default VisitorCounterTable;
