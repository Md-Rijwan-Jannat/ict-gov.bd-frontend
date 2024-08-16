import { useLanguage } from "@/context/LanguageContextProvider";
import { motion } from "framer-motion";
import { useState } from "react";
import NoticePagination from "../pagination/Pagination";
import earth from "../../assets/images/Earth.jpg";

const NoticeBroad = () => {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 5;

  const notices = [
    {
      title:
        language === "bn"
          ? "আইসিটি সেবা উন্নয়ন প্রকল্পের নোটিশ"
          : "ICT Service Development Project Notice",
      date: "2024-08-15",
      content:
        language === "bn"
          ? "আইসিটি সেবা উন্নয়ন প্রকল্পের অংশ হিসেবে সকল সংশ্লিষ্ট বিভাগের কর্মচারীদের জন্য জরুরি নোটিশ। বিস্তারিত জানাতে আমাদের অফিসিয়াল সাইট ভিজিট করুন।"
          : "Urgent notice for all employees of the ICT Service Development Project. Please visit our official site for more details.",
    },
    {
      title:
        language === "bn"
          ? "নতুন আইসিটি প্রকল্পের ঘোষণা"
          : "Announcement of New ICT Project",
      date: "2024-08-10",
      content:
        language === "bn"
          ? "নতুন আইসিটি প্রকল্পের উদ্বোধন উপলক্ষে বিশেষ সভা অনুষ্ঠিত হবে। বিস্তারিত সময়সূচী শীঘ্রই প্রকাশ করা হবে।"
          : "A special meeting will be held to announce the launch of a new ICT project. The detailed schedule will be published soon.",
    },
    {
      title:
        language === "bn"
          ? "সাইবার নিরাপত্তা প্রশিক্ষণ"
          : "Cybersecurity Training",
      date: "2024-08-05",
      content:
        language === "bn"
          ? "সাইবার নিরাপত্তা বিষয়ে প্রশিক্ষণের জন্য সকল কর্মচারীকে আমন্ত্রণ জানানো যাচ্ছে। বিস্তারিত সময়সূচী আমাদের অফিসিয়াল সাইটে দেখুন।"
          : "All employees are invited to attend training on cybersecurity. Please check our official site for the detailed schedule.",
    },
    {
      title:
        language === "bn"
          ? "প্রকল্প অবকাঠামো উন্নয়ন"
          : "Project Infrastructure Development",
      date: "2024-07-30",
      content:
        language === "bn"
          ? "আইসিটি প্রকল্পের অবকাঠামো উন্নয়নের জন্য নতুন উদ্যোগ গ্রহণ করা হয়েছে। সকলকে সহযোগিতা করার জন্য অনুরোধ করা হচ্ছে।"
          : "New initiatives have been taken for the development of ICT project infrastructure. Everyone is requested to cooperate.",
    },
    {
      title:
        language === "bn" ? "নেটওয়ার্ক রক্ষণাবেক্ষণ" : "Network Maintenance",
      date: "2024-07-25",
      content:
        language === "bn"
          ? "আগামীকাল নেটওয়ার্ক রক্ষণাবেক্ষণ কাজ চলমান থাকবে। এ সময়ে কিছু সেবা অস্থায়ীভাবে বন্ধ থাকবে।"
          : "Network maintenance will be carried out tomorrow. Some services may be temporarily unavailable during this time.",
    },
    {
      title: language === "bn" ? "আইসিটি সম্মেলন ২০২৪" : "ICT Conference 2024",
      date: "2024-07-20",
      content:
        language === "bn"
          ? "আগামী মাসে অনুষ্ঠিত হতে যাওয়া আইসিটি সম্মেলন ২০২৪ এর জন্য নিবন্ধন শুরু হয়েছে। বিস্তারিত জানার জন্য অফিসিয়াল সাইট দেখুন।"
          : "Registration for the upcoming ICT Conference 2024 has started. Please visit our official site for more details.",
    },
    {
      title:
        language === "bn"
          ? "স্মার্ট কার্ড প্রকল্পের অগ্রগতি"
          : "Smart Card Project Progress",
      date: "2024-07-15",
      content:
        language === "bn"
          ? "স্মার্ট কার্ড প্রকল্পের অগ্রগতি সংক্রান্ত সকল তথ্য জানতে আমাদের অফিসিয়াল সাইট ভিজিট করুন।"
          : "Please visit our official site to know about the progress of the Smart Card project.",
    },
    {
      title:
        language === "bn" ? "ডিজিটাল বাংলাদেশ দিবস" : "Digital Bangladesh Day",
      date: "2024-07-10",
      content:
        language === "bn"
          ? "ডিজিটাল বাংলাদেশ দিবস উপলক্ষে বিশেষ অনুষ্ঠানের আয়োজন করা হয়েছে। সকলকে অনুষ্ঠানে উপস্থিত থাকার জন্য অনুরোধ করা হচ্ছে।"
          : "A special event has been organized to celebrate Digital Bangladesh Day. Everyone is requested to attend the event.",
    },
    {
      title:
        language === "bn" ? "সফটওয়্যার আপডেট নোটিশ" : "Software Update Notice",
      date: "2024-07-05",
      content:
        language === "bn"
          ? "আগামী সপ্তাহে অফিসিয়াল সফটওয়্যারগুলোর আপডেট করা হবে। আপডেট সম্পর্কে বিস্তারিত জানার জন্য আমাদের সাইটে ভিজিট করুন।"
          : "Official software will be updated next week. Please visit our site to know more about the updates.",
    },
    {
      title:
        language === "bn"
          ? "কর্মচারী মূল্যায়ন সভা"
          : "Employee Evaluation Meeting",
      date: "2024-07-01",
      content:
        language === "bn"
          ? "সকল কর্মচারীকে পরবর্তী কর্মচারী মূল্যায়ন সভায় উপস্থিত থাকার জন্য অনুরোধ করা হচ্ছে। বিস্তারিত সময়সূচী শীঘ্রই প্রকাশ করা হবে।"
          : "All employees are requested to attend the next employee evaluation meeting. The detailed schedule will be published soon.",
    },
    {
      title:
        language === "bn" ? "ডেটা সেন্টার সম্প্রসারণ" : "Data Center Expansion",
      date: "2024-06-25",
      content:
        language === "bn"
          ? "আইসিটি প্রকল্পের ডেটা সেন্টার সম্প্রসারণ কাজ শুরু হয়েছে। সকল কর্মচারীকে সহযোগিতা করার জন্য অনুরোধ করা হচ্ছে।"
          : "The expansion of the ICT project's data center has begun. All employees are requested to cooperate.",
    },
    {
      title:
        language === "bn" ? "ই-গভর্নেন্স প্রশিক্ষণ" : "E-Governance Training",
      date: "2024-06-20",
      content:
        language === "bn"
          ? "ই-গভর্নেন্স বিষয়ে প্রশিক্ষণের জন্য সকল কর্মচারীকে আমন্ত্রণ জানানো হচ্ছে। বিস্তারিত সময়সূচী আমাদের সাইটে দেখুন।"
          : "All employees are invited to attend training on e-governance. Please check our site for the detailed schedule.",
    },
  ];

  // Pagination logic
  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = notices.slice(indexOfFirstNotice, indexOfLastNotice);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-6 bg-white-50 mt-10 relative h-[1220px] md:h-[850px]">
      <h2 className="text-3xl font-bold mb-6 text-center text-primaryColor">
        {language === "bn" ? "নোটিশ বোর্ড" : "Notice Board"}
      </h2>

      <div className="space-y-4 relative z-10">
        {currentNotices.map((notice, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            className="p-4 bg-white-100 rounded-[4px] hover:bg-white-200 hover:bg-opacity-90 bg-opacity-90 border"
          >
            <h3 className="text-xl font-semibold text-primaryColor">
              {notice.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{notice.date}</p>
            <p className="text-gray-800">{notice.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Earth image as a background */}
      <div>
        <img
          src={earth}
          alt="Earth Background"
          className="absolute top-16 md:-top-16 left-0 w-[300px] z-0"
        />
      </div>

      {/* Pagination */}
      <div className="mt-5 md:mt-10">
        <NoticePagination
          currentPage={currentPage}
          totalPages={Math.ceil(notices.length / noticesPerPage)}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default NoticeBroad;
