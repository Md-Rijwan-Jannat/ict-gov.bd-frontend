import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContextProvider";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import {
  FaComments,
  FaRegCommentDots,
  FaRegCommentAlt,
  FaExclamationCircle,
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { Editor } from "@tinymce/tinymce-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const PollingModal = () => {
  const { language } = useLanguage() as { language: Language };
  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const titles = {
    bn: "বাছাই করুন",
    en: "Choose",
  };

  const options = {
    bn: ["জিজ্ঞাসা", "মতামত", "পরামর্শ", "অভিযোগ"],
    en: ["Inquiry", "Opinion", "Advice", "Complaint"],
  };

  const icons = [
    FaComments,
    FaRegCommentDots,
    FaRegCommentAlt,
    FaExclamationCircle,
  ];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setFormVisible(true);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          className="w-10 md:w-16"
          src="https://polling.portal.gov.bd/comment.gif"
          alt="Polling Icon"
        />
      </DialogTrigger>
      <DialogContent
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
        className="bg-white-50 rounded-lg shadow-lg px-5 pt-10 overflow-y-auto"
      >
        {isFormVisible ? (
          ""
        ) : (
          <>
            <div className="bg-primaryColor p-4 text-center rounded-t-lg">
              <h2 className="text-white-50 text-xl font-semibold flex items-center justify-center space-x-2">
                <FaCheckCircle className="text-white-50" />
                <span>{titles[language]}</span>
              </h2>
            </div>
          </>
        )}
        {isFormVisible ? (
          <div>
            <div className="bg-primaryColor p-4 text-center rounded-t-lg">
              <h2 className="text-white-50 text-xl font-semibold flex items-center justify-center space-x-2">
                <FaCheckCircle className="text-white-50" />
                <span>{selectedOption}</span>
              </h2>
            </div>
            <div className="flex items-center justify-between p-4 rounded-t-lg">
              <Button
                variant="ghost"
                className="flex items-center bg-primaryColor text-white-50 hover:text-white-200 rounded text-[8px] md:text-sm px-6 hover:bg-hoverPrimaryColor 
                   transition-colors duration-500 ease-in-out"
                onClick={() => setFormVisible(false)}
              >
                <FaArrowLeft className="mr-2" />
                {language === "bn" ? "পেছনে যান" : "Back"}
              </Button>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  {language === "bn"
                    ? "আপনার বার্তা লিখুন"
                    : "Write your message"}
                </label>
                <Editor
                  apiKey="64e5lcmocwpj39ir0p4qoisls2ieanvm3swq9dmxmc2k4upn"
                  initialValue=""
                  init={{
                    height: 200,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | bold italic backcolor | \
                      alignleft aligncenter alignright alignjustify | \
                      bullist numlist outdent indent | removeformat | help",
                  }}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  {language === "bn" ? "ফাইল যুক্ত করুন" : "Attach a file"}
                </label>
                <Input type="file" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  placeholder={
                    language === "bn" ? "আপনার নাম লিখুন" : "Enter your name"
                  }
                  className="mb-4"
                />
                <Input
                  placeholder={
                    language === "bn" ? "আপনার ইমেইল লিখুন" : "Enter your email"
                  }
                  className="mb-4"
                />
                <Input
                  placeholder={
                    language === "bn"
                      ? "আপনার কন্টাক্ট নাম্বার লিখুন"
                      : "Enter your contact number"
                  }
                  className="mb-4"
                />
              </div>
              <Button
                className="bg-primaryColor text-white-50 hover:text-white-200 rounded text-[8px] md:text-sm px-6 hover:bg-hoverPrimaryColor 
                   transition-colors duration-500 ease-in-out"
              >
                {language === "bn" ? "জমা দিন" : "Submit"}
              </Button>
            </div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-2 gap-4 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {options[language].map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(option)}
                className="flex flex-col items-center p-4 border rounded-md cursor-pointer hover:bg-primaryColor hover:text-white-50 transition-all duration-300"
              >
                {React.createElement(icons[index], {
                  className: "text-4xl mb-2",
                })}
                <span className="text-base font-medium">{option}</span>
              </div>
            ))}
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PollingModal;
