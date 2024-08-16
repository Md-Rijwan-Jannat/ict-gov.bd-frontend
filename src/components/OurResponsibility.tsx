import React from "react";
import { useLanguage } from "@/context/LanguageContextProvider";
import { Language } from "@/types";
import { motion } from "framer-motion";
import { FaChevronCircleRight } from "react-icons/fa";

interface ResponsibilityCard {
  title: {
    bn: string;
    en: string;
  };
  bulletPoints: {
    bn: string[];
    en: string[];
  };
  imgSrc?: string; // Optional image source field
}

const ourResponsibilityCards: ResponsibilityCard[] = [
  {
    title: {
      bn: "আমাদের বিষয়ে",
      en: "About Us",
    },
    bulletPoints: {
      bn: ["ভিশন ও মিশন", "সাংগঠনিক কাঠামো", "কর্মকর্তা/কর্মচারী", "কর্মবন্টন"],
      en: [
        "Vision & Mission",
        "Organizational Structure",
        "Officers/Staff",
        "Work Distribution",
      ],
    },
    imgSrc:
      "https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/front_service_box/142fc8d5_3b18_4538_a4e2_f6fdb20cf01d/aboutus2.png",
  },
  {
    title: {
      bn: "বিজ্ঞপ্তি/আদেশ/পরিপত্র",
      en: "Notices/Orders/Circulars",
    },
    bulletPoints: {
      bn: [
        "প্রজ্ঞাপন/পরিপত্র",
        "অফিস আদেশ/বিদেশ ভ্রমণের জিও/পাসপোর্ট অনাপত্তিপত্র",
        "সংবাদ বিজ্ঞপ্তি",
        "দরপত্র/নিয়োগ বিজ্ঞপ্তি",
      ],
      en: [
        "Gazette/Circular",
        "Office Orders/Foreign Travel GEO/Passport NOC",
        "Press Release",
        "Tender/Recruitment Notices",
      ],
    },
    imgSrc:
      "https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/front_service_box/d84b6e38_c2f2_4e52_84ed_74df4598eabb/%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0_0.png",
  },
  {
    title: {
      bn: "নীতিমালা ও প্রকাশনা",
      en: "Policies & Publications",
    },
    bulletPoints: {
      bn: [
        "নীতিমালা",
        "আইন ও বিধি/নির্দেশিকা ও কৌশলপত্র",
        "প্রকাশনা ও বার্ষিক প্রতিবেদন",
        "বিভিন্ন প্রতিবেদন",
      ],
      en: [
        "Policies",
        "Laws & Regulations/Guidelines & Strategy Papers",
        "Publications & Annual Reports",
        "Various Reports",
      ],
    },
    imgSrc:
      "https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/front_service_box/f7bf4d4e_0379_4230_a324_cc855d5e4e59/POLICY_PUBLICATION-New%20(1).png",
  },
  {
    title: {
      bn: "নাগরিক ই-সেবাসমূহ",
      en: "Citizen E-Services",
    },
    bulletPoints: {
      bn: [
        "উদ্ভাবনীমুলক কাজে অনুদান",
        "ফেলোশিপ ও বৃত্তি",
        "হাইটেক পার্ক ওয়ান স্টপ সার্ভিস",
        "অন্যান্য ই-সেবা",
      ],
      en: [
        "Innovation Grants",
        "Fellowships & Scholarships",
        "Hi-Tech Park One-Stop Service",
        "Other E-Services",
      ],
    },
    imgSrc:
      "https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/front_service_box/16c40688_fcbc_46d8_8889_c8bf67ba1681/-5_0.png",
  },
  {
    title: {
      bn: "সেবা প্রদান প্রতিশ্রুতি (সিটিজেন্‌স চার্টার)",
      en: "Service Commitment (Citizens Charter)",
    },
    bulletPoints: {
      bn: [
        "সেবা প্রদান প্রতিশ্রুতি",
        "ফোকাল পয়েন্ট/পরিবীক্ষণ কমিটি",
        "কর্মপরিকল্পনা, পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
        "আইন/বিধি/নীতিমালা/পরিপত্র/প্রজ্ঞাপন/পরিপত্র",
      ],
      en: [
        "Service Commitment",
        "Focal Point/Monitoring Committee",
        "Action Plan, Monitoring & Evaluation Report",
        "Laws/Regulations/Policies/Circulars/Gazette",
      ],
    },
    imgSrc:
      "https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/front_service_box/81e22de3_eb83_47fc_a24a_3cd9299b489c/Citizen%20Charter.png",
  },
  {
    title: {
      bn: "বার্ষিক কর্মসম্পাদন চুক্তি",
      en: "Annual Performance Agreement",
    },
    bulletPoints: {
      bn: [
        "নির্দেশিকা/পরিপত্র/এপিএ টিম/ফোকাল পয়েন্ট",
        "বার্ষিক কর্মসম্পাদন চুক্তি ও ফলাফল",
        "পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
        "এপিএএমএস সফটওয়্যার লিংক",
      ],
      en: [
        "Guidelines/Circulars/APA Team/Focal Point",
        "Annual Performance Agreement & Results",
        "Monitoring & Evaluation Report",
        "APAAMS Software Link",
      ],
    },
    imgSrc:
      "https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/front_service_box/fa5bf6dd_b0ab_4a7d_a370_56d8b2ae0610/apa.png",
  },
  {
    title: {
      bn: "জাতীয় শুদ্ধাচার কৌশল",
      en: "National Integrity Strategy",
    },
    bulletPoints: {
      bn: [
        "উত্তম চর্চা কর্মপরিকল্পনা সফটওয়্যার লিংক",
        "নৈতিকতা কমিটি ও ফোকাল পয়েন্ট",
        "পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন",
        "আইন/বিধি/ নীতিমালা/নির্দেশিকা/পরিপত্র/প্রজ্ঞাপন/কর্মপরিকল্পনা",
      ],
      en: [
        "Best Practices Action Plan Software Link",
        "Ethics Committee & Focal Point",
        "Monitoring/Evaluation Report",
        "Laws/Regulations/Policies/Guidelines/Circulars/Gazette/Action Plan",
      ],
    },
    imgSrc:
      "https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/front_service_box/61b98574_16c7_4b1e_906e_e332db2f2975/nis_logo3.png",
  },
  {
    title: {
      bn: "অভিযোগ প্রতিকার ব্যবস্থাপনা",
      en: "Complaint Redressal Management",
    },
    bulletPoints: {
      bn: [
        "অনিক ও আপিল কর্মকর্তা",
        "কর্মপরিকল্পনা, পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
        "অভিযোগ দাখিল (অনলাইন)",
        "আইন/বিধি/নীতিমালা/পরিপত্র/প্রজ্ঞাপন/নির্দেশিকা",
      ],
      en: [
        "ANIC & Appeal Officer",
        "Action Plan, Monitoring & Evaluation Report",
        "Complaint Submission (Online)",
        "Laws/Regulations/Policies/Circulars/Gazette/Guidelines",
      ],
    },
    imgSrc:
      "https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/front_service_box/0c447181_d990_48e1_92c3_7a8b429f5e10/complain%20(1)%20(1).png",
  },
  {
    title: {
      bn: "তথ্য অধিকার",
      en: "Right to Information",
    },
    bulletPoints: {
      bn: [
        "দায়িত্বপ্রাপ্ত কর্মকর্তা ও আপীল কর্তৃপক্ষ",
        "আবেদন ও আপিল ফরম",
        "স্বপ্রণোদিতভাবে প্রকাশযোগ্য তথ্যসমূহ/বাস্তবায়ন অগ্রগতি প্রতিবেদন",
        "আইন/বিধি/কর্মপরিকল্পনা/প্রতিবেদন/নীতিমালা/পরিপত্র/নির্দেশিকা/প্রজ্ঞাপন",
      ],
      en: [
        "Designated Officer & Appellate Authority",
        "Application & Appeal Forms",
        "Proactively Disclosable Information/Implementation Progress Report",
        "Laws/Regulations/Action Plans/Reports/Policies/Circulars/Guidelines/Gazette",
      ],
    },
    imgSrc:
      "https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/front_service_box/deb3c1b7_43c4_4cd2_8fb4_a1f4a17f731b/infocom.png",
  },
  {
    title: {
      bn: "উদ্ভাবনী কার্যক্রম",
      en: "Innovative Activities",
    },
    bulletPoints: {
      bn: [
        "ইনোভেশন টিম",
        "ইনোভেশন আইডিয়া",
        "ইনোভেশন কর্মপরিকল্পনা/প্রকাশনা",
        "পাইলটিং প্রকল্পের তালিকা",
      ],
      en: [
        "Innovation Team",
        "Innovation Ideas",
        "Innovation Action Plan/Publications",
        "Pilot Project List",
      ],
    },
    imgSrc:
      "https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/front_service_box/bcac47d9_6e2e_4294_8f9b_c5d08760233c/INNOVATION%20(1).png",
  },
  {
    title: {
      bn: "সেবা সহজিকরণ",
      en: "Service Simplification",
    },
    bulletPoints: {
      bn: [
        "প্রজ্ঞাপন/পরিপত্র/নীতিমালা/প্রকাশনা",
        "বাস্তবায়িত ডিজিটাল সেবার তথ্য",
        "সেবা সহজিকরণের দৃষ্টান্ত",
        "সহজিকৃত সেবার তালিকা",
      ],
      en: [
        "Gazette/Circular/Policies/Publications",
        "Implemented Digital Services Information",
        "Examples of Service Simplification",
        "List of Simplified Services",
      ],
    },
    imgSrc:
      "https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/front_service_box/9038feed_aabf_4c60_a5ee_0d68abfd7c29/SPS-3.png",
  },
  {
    title: {
      bn: "এসডিজি ও উন্নয়ন কর্মপরিকল্পনা",
      en: "SDGs & Development Plans",
    },
    bulletPoints: {
      bn: [
        "মন্ত্রণালয়/বিভাগের এসডিজি",
        "এসডিজি ফোকাল পয়েন্ট/বিকল্প ফোকাল পয়েন্ট",
        "এসডিজি জাতীয় ডকুমেন্ট",
        "পঞ্চবার্ষিকী পরিকল্পনা ও প্রতিবেদন",
      ],
      en: [
        "Ministry/Division SDGs",
        "SDG Focal Point/Alternate Focal Point",
        "National SDG Documents",
        "Five-Year Plans & Reports",
      ],
    },
    imgSrc:
      "https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/front_service_box/998960d1_ebe5_4b04_95a6_13e0da9b08ec/FinalLogoSDG.png",
  },
  {
    title: {
      bn: "প্রযুক্তি উদ্ভাবন ও গবেষণা",
      en: "Technology Innovation & Research",
    },
    bulletPoints: {
      bn: [
        "গবেষণা ও উন্নয়ন প্রকল্প",
        "উদ্ভাবনী প্রযুক্তি ও গাইডলাইন",
        "সফল প্রযুক্তি উদ্ভাবনের উদাহরণ",
        "গবেষণামূলক প্রকাশনা",
      ],
      en: [
        "Research & Development Projects",
        "Innovative Technology & Guidelines",
        "Examples of Successful Technology Innovation",
        "Research Publications",
      ],
    },
    imgSrc:
      "https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/front_service_box/0e980d84_0eca_4411_b8a8_124afc72f6b2/budget2%20(1).png",
  },
  {
    title: {
      bn: "বিশ্বের তথ্যপ্রযুক্তি খবর",
      en: "World IT News",
    },
    bulletPoints: {
      bn: [
        "বিশ্বের আইটি সাফল্যের গল্প",
        "নতুন প্রযুক্তি ও উদ্ভাবন",
        "বিশ্বের আইটি সম্মেলন/ওয়ার্কশপ",
        "আইটি খাতের বিনিয়োগ ও সহযোগিতা",
      ],
      en: [
        "Global IT Success Stories",
        "New Technologies & Innovations",
        "Global IT Conferences/Workshops",
        "IT Sector Investment & Collaboration",
      ],
    },
    imgSrc:
      "https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/front_service_box/85ae0c60_feb0_4ec5_ae54_694eb56e03d9/Capture%20(1).JPG",
  },
  {
    title: {
      bn: "অন্যান্য তথ্য",
      en: "Other Information",
    },
    bulletPoints: {
      bn: [
        "বিভিন্ন বিভাগের যোগাযোগ তথ্য",
        "প্রশাসনিক আপডেট ও নির্দেশিকা",
        "বিভিন্ন নিয়ম ও প্রক্রিয়া",
        "প্রশ্নোত্তর",
      ],
      en: [
        "Contact Information of Various Departments",
        "Administrative Updates & Guidelines",
        "Various Rules & Procedures",
        "FAQs",
      ],
    },
    imgSrc:
      "https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/front_service_box/4630a5d3_7090_497b_9d9a_fbf358dc8ebf/-%E0%A6%B8%E0%A7%87%E0%A6%AC%E0%A6%BE-1_0.png",
  },
  {
    title: {
      bn: "ডাউনলোড",
      en: "Downloads",
    },
    bulletPoints: {
      bn: [
        "সরকারি ফরমসমূহ",
        "বিভিন্ন নির্দেশিকা ও আইন",
        "বার্ষিক ও নীতিমালা প্রতিবেদন",
        "কর্মপরিকল্পনা ও কৌশলপত্র",
      ],
      en: [
        "Government Forms",
        "Various Guidelines & Laws",
        "Annual & Policy Reports",
        "Action Plans & Strategy Papers",
      ],
    },
    imgSrc:
      "hhttps://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/front_service_box/4630a5d3_7090_497b_9d9a_fbf358dc8ebf/-%E0%A6%B8%E0%A7%87%E0%A6%AC%E0%A6%BE-1_0.png",
  },
];

const OurResponsibility: React.FC = () => {
  const { language } = useLanguage() as { language: Language };

  // Select data based on the current language
  const items = ourResponsibilityCards.map((card) => ({
    title: card.title[language],
    bulletPoints: card.bulletPoints[language],
    image: card.imgSrc,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gaps-6 md:p-6">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="p-4 rounded-[4px] border bg-white-100 transition-shadow duration-300 hover:shadow"
        >
          {item.image && (
            <div className="flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="size-24 object-cover rounded-t-lg"
              />
            </div>
          )}
          <div className="mt-4">
            <motion.h3
              className="text-sm md:text-lg font-semibold mb-4 text-primaryColor text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.title}
            </motion.h3>
            <motion.div
              className="flex flex-col gap-2 md:pl-5 text-black-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {item.bulletPoints.map((point, i) => (
                <motion.div
                  key={i}
                  className="mb-1 flex items-center gap-2 w-full border border-white-50 px-2 py-1 rounded-[4px] hover:border hover:bg-white-200 hover:text-black text-xs md:text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                >
                  <FaChevronCircleRight className="text-primaryColor size-5" />
                  {point}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default OurResponsibility;
