import { useState } from "react";
import { useLanguage } from "@/context/LanguageContextProvider";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import {
  FaUniversalAccess,
  FaFont,
  FaUndo,
  FaAdjust,
  FaPaintBrush,
  FaSearch,
  FaRegKeyboard,
  FaHighlighter,
  FaEye,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Language } from "@/types";

const AccessibilityModal = () => {
  const { language } = useLanguage() as { language: Language };
  const [isInverted, setIsInverted] = useState(false);

  // Define titles and button texts in both languages
  const texts = {
    title: {
      bn: "অ্যাক্সেসিবিলিটি সেটিংস",
      en: "Accessibility Settings",
    },
    increaseFont: {
      bn: "ফন্ট বড় করুন",
      en: "Increase Font Size",
    },
    decreaseFont: {
      bn: "ফন্ট ছোট করুন",
      en: "Decrease Font Size",
    },
    resetFont: {
      bn: "ফন্ট রিসেট করুন",
      en: "Reset Font Size",
    },
    monochrome: {
      bn: "মনোক্রোম",
      en: "Monochrome",
    },
    invertColors: {
      bn: "রঙ উল্টান",
      en: "Invert Colors",
    },
    bigCursor: {
      bn: "বড় কার্সর",
      en: "Big Cursor",
    },
    highlightLinks: {
      bn: "লিঙ্ক হাইলাইট করুন",
      en: "Highlight Links",
    },
    showHeadings: {
      bn: "শিরোনাম দেখান",
      en: "Show Headings",
    },
    readingGuide: {
      bn: "পঠন গাইড",
      en: "Reading Guide",
    },
    downloadScreenReader: {
      bn: "স্ক্রীন রিডার ডাউনলোড করুন",
      en: "Download Screen Reader",
    },
    reset: {
      bn: "রিসেট",
      en: "Reset",
    },
  };

  const resetStyles = () => {
    document.body.style.fontSize = "";
    document.body.style.filter = "";
    document.body.style.cursor = "";
    Array.from(document.querySelectorAll("a, h1, h2, h3, h4, h5, h6")).forEach(
      (element) => {
        if (element instanceof HTMLElement) {
          element.style.backgroundColor = "";
          element.style.color = "";
        }
      }
    );
    setIsInverted(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`p-1 md:p-3 bg-primaryColor rounded-full shadow-lg focus:outline-none text-black md:w-16 ${
            isInverted ? "invert-trigger-button" : ""
          }`}
        >
          <FaUniversalAccess className="size-8 md:size-10 text-white-50" />
        </button>
      </DialogTrigger>

      <DialogContent
        className={`bg-white-50 rounded-lg shadow-lg p-6 ${
          isInverted ? "invert-modal-content" : ""
        }`}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "90vw",
          maxHeight: "90vh",
          overflow: "auto",
          zIndex: 1000,
        }}
      >
        <motion.div
          className="grid gap-4 py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="bg-primaryColor px-3 py-3 text-white-50 text-sm md:text-xl font-semibold text-center rounded-md">
            {texts.title[language]}
          </h2>

          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Increase Font Size */}
            <button
              className="flex gap-2 items-center bg-white-200 rounded-[4px] text-black-800 text-sm md:text-[16px] border px-3 py-3 cursor-pointer"
              onClick={() => (document.body.style.fontSize = "larger")}
            >
              <FaFont className="size-6 text-primaryColor" />{" "}
              {texts.increaseFont[language]}
            </button>

            {/* Decrease Font Size */}
            <button
              className="flex gap-2 items-center bg-white-200 rounded-[4px] text-black-800 text-sm md:text-[16px] border px-3 py-3 cursor-pointer"
              onClick={() => (document.body.style.fontSize = "smaller")}
            >
              <FaFont className="size-6 text-primaryColor" />{" "}
              {texts.decreaseFont[language]}
            </button>

            {/* Reset Font Size */}
            <button
              className="flex gap-2 items-center bg-white-200 rounded-[4px] text-black-800 text-sm md:text-[16px] border px-3 py-3 cursor-pointer"
              onClick={() => (document.body.style.fontSize = "")}
            >
              <FaUndo className="size-6 text-primaryColor" />{" "}
              {texts.resetFont[language]}
            </button>

            {/* Monochrome */}
            <button
              className="flex gap-2 items-center bg-white-200 rounded-[4px] text-black-800 text-sm md:text-[16px] border px-3 py-3 cursor-pointer"
              onClick={() => (document.body.style.filter = "grayscale(100%)")}
            >
              <FaPaintBrush className="size-6 text-primaryColor" />{" "}
              {texts.monochrome[language]}
            </button>

            {/* Invert Colors */}
            <button
              className="flex gap-2 items-center bg-white-200 rounded-[4px] text-black-800 text-sm md:text-[16px] border px-3 py-3 cursor-pointer"
              onClick={() => {
                document.body.style.filter = "invert(100%)";
                setIsInverted(true);
              }}
            >
              <FaAdjust className="size-6 text-primaryColor" />{" "}
              {texts.invertColors[language]}
            </button>

            {/* Big Cursor */}
            <button
              className="flex gap-2 items-center bg-white-200 rounded-[4px] text-black-800 text-sm md:text-[16px] border px-3 py-3 cursor-pointer"
              onClick={() =>
                (document.body.style.cursor =
                  "url('https://example.com/big-cursor.png'), auto")
              }
            >
              <FaRegKeyboard className="size-6 text-primaryColor" />{" "}
              {texts.bigCursor[language]}
            </button>

            {/* Highlight Links */}
            <button
              className="flex gap-2 items-center bg-white-200 rounded-[4px] text-black-800 text-sm md:text-[16px] border px-3 py-3 cursor-pointer"
              onClick={() =>
                Array.from(document.querySelectorAll("a")).forEach((link) => {
                  if (link instanceof HTMLElement) {
                    link.style.backgroundColor = "yellow";
                    link.style.color = "black";
                  }
                })
              }
            >
              <FaHighlighter className="size-6 text-primaryColor" />{" "}
              {texts.highlightLinks[language]}
            </button>

            {/* Show Headings */}
            <button
              className="flex gap-2 items-center bg-white-200 rounded-[4px] text-black-800 text-sm md:text-[16px] border px-3 py-3 cursor-pointer"
              onClick={() =>
                Array.from(
                  document.querySelectorAll("h1, h2, h3, h4, h5, h6")
                ).forEach((heading) => {
                  if (heading instanceof HTMLElement) {
                    heading.style.backgroundColor = "lightblue";
                  }
                })
              }
            >
              <FaEye className="size-6 text-primaryColor" />{" "}
              {texts.showHeadings[language]}
            </button>

            {/* Reading Guide */}
            <button
              className="flex gap-2 items-center bg-white-200 rounded-[4px] text-black-800 text-sm md:text-[16px] border px-3 py-3 cursor-pointer"
              onClick={() => {
                const guide = document.createElement("div");
                guide.style.position = "fixed";
                guide.style.top = "50%";
                guide.style.left = "0";
                guide.style.width = "100%";
                guide.style.height = "2px";
                guide.style.backgroundColor = "yellow";
                guide.style.transform = "translateY(-50%)";
                guide.style.zIndex = "1000";
                guide.style.pointerEvents = "none";
                document.body.appendChild(guide);
                setTimeout(() => document.body.removeChild(guide), 5000);
              }}
            >
              <FaSearch className="size-6 text-primaryColor" />{" "}
              {texts.readingGuide[language]}
            </button>

            {/* Download Screen Reader */}
            <a
              className="flex gap-2 items-center bg-white-200 rounded-[4px] text-black-800 text-sm md:text-[16px] border px-3 py-3 cursor-pointer"
              href="https://example.com/screen-reader"
              download
            >
              <FaRegKeyboard className="size-6 text-primaryColor" />{" "}
              {texts.downloadScreenReader[language]}
            </a>

            {/* Reset All Settings */}
            <button
              className="col-span-2 flex gap-2 items-center bg-white-200 rounded-[4px] text-black-800 text-sm md:text-[16px] border px-3 py-3 cursor-pointer"
              onClick={resetStyles}
            >
              <FaUndo className="size-6 text-primaryColor" />{" "}
              {texts.reset[language]}
            </button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default AccessibilityModal;
