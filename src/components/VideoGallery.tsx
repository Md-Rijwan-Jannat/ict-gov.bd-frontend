import React from "react";
import { useLanguage } from "@/context/LanguageContextProvider";
import { Language } from "@/types";

// Define an interface for the video data
interface Video {
  url: string;
  title: { bn: string; en: string }; // Change title to an object with keys for each language
}

const videos: Video[] = [
  {
    url: "https://www.youtube.com/embed/GT9ShGE_qjg?si=JVtOGxIaynpDN_sE",
    title: {
      bn: "বন্যার সময় কি করণীয়", // Bengali
      en: "What to Do During a Flood", // English
    },
  },
  {
    url: "https://www.youtube.com/embed/otqu3LeAojk?si=VtsRSR21viSNdQFx",
    title: {
      bn: "চতুর্থ শিল্পবিল্পবের প্রযুক্তি এবং সম্ভাবনাময় বাংলাদেশ", // Bengali
      en: "Fourth Industrial Revolution Technologies and Promising Bangladesh", // English
    },
  },
];

const VideoGallery: React.FC = () => {
  const { language } = useLanguage() as { language: Language };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {videos.map((video, index) => (
        <div key={index} className="p-2">
          <h3 className="rounded-[4px] bg-primaryColor px-3 py-3 text-white-50 text-sm md:text-xl font-medium text-center h-[80px] mb-3">
            {language === "bn" ? video.title.bn : video.title.en}
          </h3>
          <iframe
            width="560"
            height="400"
            src={video.url}
            title={language === "bn" ? video.title.bn : video.title.en}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-auto rounded-t"
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
