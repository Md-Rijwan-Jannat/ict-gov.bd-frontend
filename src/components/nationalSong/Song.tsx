import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContextProvider";
import nationalSong from "../../assets/bd_national_anthem.mp3";
import {
  FaDownload,
  FaEllipsisV,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaMusic,
} from "react-icons/fa";

const Song = () => {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [showOptions, setShowOptions] = useState(false);
  const [volume, setVolume] = useState(1); // Volume state
  const [isMuted, setIsMuted] = useState(false); // Mute state
  const [isExpanded, setIsExpanded] = useState(false); // Lyrics expansion state
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      const progress = (audio.currentTime / audio.duration) * 100;
      setProgress(progress);
      setCurrentTime(formatTime(audio.currentTime));
    }
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) {
      setDuration(formatTime(audio.duration));
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const handleSpeedChange = (speed: number) => {
    const audio = audioRef.current;
    if (audio) {
      audio.playbackRate = speed;
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const lyricsBangla = `আমার সোনার বাংলা, আমি তোমায় ভালোবাসি।
চিরদিন তোমার আকাশ, তোমার বাতাস, আমার প্রাণে বাজায় বাঁশি॥
ও মা, ফাগুনে তোর আমের বনে ঘ্রাণে পাগল করে,
মরি হায়, হায় রে—
ও মা, অঘ্রাণে তোর ভরা ক্ষেতে আমি কী দেখেছি মধুর হাসি॥

কী শোভা, কী ছায়া গো, কী স্নেহ, কী মায়া গো—
কী আঁচল বিছায়েছ বটের মূলে, নদীর কূলে কূলে।
মা, তোর মুখের বাণী আমার কানে লাগে সুধার মতো,
মরি হায়, হায় রে—
মা, তোর বদনখানি মলিন হলে, ও মা, আমি নয়নজলে ভাসি॥

তোমার এই খেলাঘরে শিশুকাল কাটিলে রে,
তোমারি ধুলামাটি অঙ্গে মাখি ধন্য জীবন মানি।
তুই দিন ফুরালে সন্ধ্যাকালে কী দীপ জ্বালিস ঘরে,
মরি হায়, হায় রে—
তখন খেলাধুলা সকল ফেলে, ও মা, তোমার কোলে ছুটে আসি॥

ধেনু-চরা তোমার মাঠে, পারে যাবার খেয়াঘাটে,
সারা দিন পাখি-ডাকা ছায়ায়-ঢাকা তোমার পল্লীবাটে,
তোমার ধানে-ভরা আঙিনাতে জীবনের দিন কাটে,
মরি হায়, হায় রে—
ও মা, আমার যে ভাই তারা সবাই, ও মা, তোমার রাখাল তোমার চাষি॥

ও মা, তোর চরণেতে দিলেম এই মাথা পেতে—
দে গো তোর পায়ের ধুলা, সে যে আমার মাথার মানিক হবে।
ও মা, গরিবের ধন যা আছে তাই দিব চরণতলে,
মরি হায়, হায় রে—
আমি পরের ঘরে কিনব না আর, মা, তোর ভূষণ ব'লে গলার ফাঁসি`;

  const lyricsBanglish = `Amar Sonar Bangla, Ami Tomay Bhalobashi.
Chiradin Tomar Akash, Tomar Batas, Amar Prane Bajay Banshi.
O Ma, Fagune Tor Amer Bone Ghreane Pagol Kore,
Mori Hay, Hay Re—
O Ma, Oghrane Tor Vora Kshete Ami Ki Dekhechi Madhur Hasi.

Ki Shobha, Ki Chhaya Go, Ki Sneho, Ki Maya Go—
Ki Aanchol Bichhayecha Bot-er Mule, Nadi-r Kule Kule.
Ma, Tor Mukher Bani Amar Kane Lage Sudhar Moto,
Mori Hay, Hay Re—
Ma, Tor Badonkhani Moline Hole, O Ma, Ami Noyonjole Bhasi.

Tomar Ei Khelaghor-e Shishukal Katile Re,
Tomari Dhulamati Ange Makhi Dhanya Jibon Mani.
Tui Din Fural-e Sandhyakal-e Ki Deep Jalais Ghore,
Mori Hay, Hay Re—
Tokhon Kheladhula Shokol Fele, O Ma, Tomar Kole Chhute Ashi.

Dhenuchara Tomar Maath-e, Pare Jabar Kheyaghat-e,
Sara Din Pakhi-daka Chhaya-dhaka Tomar Pollibat-e,
Tomar Dhane-vhora Anginate Jiboner Din Kate,
Mori Hay, Hay Re—
O Ma, Amar Je Bhai Tara Sabai, O Ma, Tomar Rakhal Tomar Chashi.

O Ma, Tor Charone Dilam Ei Matha Petay—
De Go Tor Payer Dhula, Se Je Amar Mathar Manik Hobe.
O Ma, Goriber Dhon Ja Aache Tai Dibo Charontole,
Mori Hay, Hay Re—
Ami Porer Ghore Kinbo Na Ar, Ma, Tor Bhushon Bole Golar Fansi.`;

  return (
    <div className="p-4">
      <motion.div
        className="flex items-center justify-center my-3"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }} // Jump effect: move up and back to the original position
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }} // Duration of one jump, repeat infinitely with a delay of 1 second between repeats
      >
        <FaMusic className="size-14 text-white-600" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-2xl mt-2 font-bold mb-4 text-center text-secondaryColor"
      >
        {language === "bn" ? "আমার সোনার বাংলা" : "Amar Shonar Bangla"}
      </motion.h2>
      <div className="flex items-center justify-center gap-4 border rounded-full p-2">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white p-4 rounded-full shadow-md text-primaryColor"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <FaPause className="size-5" />
          ) : (
            <FaPlay className="size-5" />
          )}
        </motion.button>
        <div className="flex-grow">
          <motion.div
            className="h-2 rounded-full bg-white-500 overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          >
            <div className="h-full bg-primaryColor"></div>
          </motion.div>
          <div className="flex justify-between text-primaryColor text-sm mt-2">
            <span>{currentTime}</span>
            <span>{duration}</span>
          </div>
        </div>
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="bg-black-100 p-2 rounded-full shadow-md text-primaryColor"
            onClick={() => setShowOptions(!showOptions)}
          >
            <FaEllipsisV className="size-4" />
          </motion.button>
          {showOptions && (
            <div className="absolute right-0 top-full mt-3 bg-white text-black-900 rounded-md border w-40 z-10">
              <button
                className="w-full text-left p-2 hover:bg-gray-200"
                onClick={() => handleSpeedChange(0.5)}
              >
                0.5x
              </button>
              <button
                className="w-full text-left p-2 hover:bg-gray-200"
                onClick={() => handleSpeedChange(1)}
              >
                1x (Normal)
              </button>
              <button
                className="w-full text-left p-2 hover:bg-gray-200"
                onClick={() => handleSpeedChange(1.5)}
              >
                1.5x
              </button>
              <button
                className="w-full text-left p-2 hover:bg-gray-200"
                onClick={() => handleSpeedChange(2)}
              >
                2x
              </button>
              <a
                href={nationalSong}
                download="bd_national_anthem.mp3"
                className="w-full text-left p-2 hover:bg-gray-200 flex items-center"
              >
                <FaDownload className="mr-2" />
                Download
              </a>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button className="text-primaryColor p-1" onClick={toggleMute}>
            {isMuted ? (
              <FaVolumeMute className="size-4" />
            ) : (
              <FaVolumeUp className="size-4" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-14 accent-primaryColor"
          />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="bg-primaryColor rounded-full px-4 py-2 text-white-50 text-center mt-2">
          {" "}
          {language === "bn" ? "জাতীয় সংগীত" : "National anthem"}
        </h3>
        <p className="text-center mt-2">
          {isExpanded
            ? language === "bn"
              ? lyricsBangla
              : lyricsBanglish
            : language === "bn"
            ? lyricsBangla.split("\n").slice(0, 4).join("\n")
            : lyricsBanglish.split("\n").slice(0, 4).join("\n")}
        </p>
        <button
          className="block mx-auto mt-2 text-primaryColor underline"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded
            ? language === "bn"
              ? "অপসারণ"
              : "See Less"
            : language === "bn"
            ? "আরও দেখুন"
            : "See More"}
        </button>
      </div>
      <audio
        ref={audioRef}
        src={nationalSong}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </div>
  );
};

export default Song;
