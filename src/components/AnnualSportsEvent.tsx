import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContextProvider";
import { SiCommerzbank } from "react-icons/si";
import { GiDigitalTrace } from "react-icons/gi";
import { FaGofore } from "react-icons/fa6";

const AnnualSportsEvent = () => {
  const { language } = useLanguage();

  // Dynamic services array
  const services = [
    {
      id: 1,
      icon: <SiCommerzbank className="size-6 text-primaryColor" />,
      title: {
        en: "Bangladesh E Directory",
        bn: "বাংলাদেশ -ই ডিরেক্টরী",
      },
    },
    {
      id: 2,
      icon: <GiDigitalTrace className="size-6 text-primaryColor" />,
      title: {
        en: "Digital services in this department",
        bn: "এই দপ্তরে ডিজিটাল সেবা সমূহ",
      },
    },
    {
      id: 3,
      icon: <FaGofore className="size-6 text-primaryColor" />,
      title: {
        en: "Govt services in app address",
        bn: "My Gov অ্যাপ ঠিকানায় সরকারি সেবা",
      },
    },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        whileTap={{ scale: 1.12 }}
        className="rounded-[4px] bg-white-200 border px-3 py-3 50 text-center cursor-pointer mt-5"
      >
        {language === "bn"
          ? "বার্ষিক কর্মসম্পাদন চুক্তি (এপিএ) ২০২০-২০২১ এর চূড়ান্ত মূল্যায়নে তথ্য ও যোগাযোগ প্রযুক্তি বিভাগের প্রথম স্থান অর্জন"
          : "Achievement of the Department of ICT in the Final Evaluation of Annual Performance Agreement (APA) 2020-2021"}
      </motion.div>

      <div className="mt-5">
        <img
          className="w-full"
          src="https://ictd.portal.gov.bd/sites/default/files/files/ictd.portal.gov.bd/npfblock//ICT%20Division%20Result.png"
          alt=""
        />
      </div>

      <div className="mt-5 md:mt-10">
        {services.map((service) => (
          <div key={service.id} className="mt-4">
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              whileTap={{ scale: 0.95 }}
              className="flex gap-2 items-center bg-white-200 rounded-[4px] text-black-800 text-sm md:text-[16px] border px-3 py-3 cursor-pointer"
            >
              {service.icon}
              <h2>{language === "bn" ? service.title.bn : service.title.en}</h2>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnualSportsEvent;
