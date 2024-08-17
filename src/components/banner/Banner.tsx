import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContextProvider";
import { motion, AnimatePresence } from "framer-motion";

const banners = [
  "https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/top_banner/78b6ffb5_f497_4a06_bf93_242db0cbef0d/Banner-1.jpg",
  "https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/top_banner/c8c2e326_f0dd_4f0d_8972_b748b556d2af/Banner-2.jpg",
];

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    if (!hasLoaded) {
      setHasLoaded(true);
    }

    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) =>
        prevBanner === banners.length - 1 ? 0 : prevBanner + 1
      );
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [hasLoaded]);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      <AnimatePresence>
        {hasLoaded && (
          <motion.div
            className="absolute inset-0 w-full h-full"
            key={currentBanner}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={banners[currentBanner]}
              alt={`Banner ${currentBanner + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-primaryColor/5 to-secondaryColor/5" />

      <div className="absolute bottom-16 md:bottom-[160px] left-1/2 transform -translate-x-1/2 text-center text-white">
        <AnimatePresence>
          {hasLoaded && (
            <>
              <motion.h1
                key={currentBanner}
                className="text-lg md:text-3xl font-bold"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
              >
                {language === "bn"
                  ? "তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ"
                  : "Information and Communication Technology Division"}
              </motion.h1>

              <motion.p
                key={`${currentBanner}-subtitle`}
                className="text-sm md:text-lg mt-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {language === "bn"
                  ? "একটি আধুনিক প্রযুক্তি-সক্ষম দেশ গড়ার লক্ষ্যে"
                  : "Aiming to build a modern technology-enabled nation"}
              </motion.p>

              <motion.p
                key={`${currentBanner}-tagline`}
                className="text-xs md:text-sm mt-1 italic"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {language === "bn"
                  ? "উদ্ভাবনের মাধ্যমে ডিজিটাল বাংলাদেশ"
                  : "Digital Bangladesh through innovation"}
              </motion.p>
            </>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`w-6 h-2 rounded-full ${
              index === currentBanner ? "bg-white-50" : "bg-black-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
