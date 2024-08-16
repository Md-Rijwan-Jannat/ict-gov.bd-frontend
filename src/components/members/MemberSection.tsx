import { useLanguage } from "@/context/LanguageContextProvider";
import MemberCard from "./MemberCard";
import Song from "../nationalSong/Song";

const MembersSection = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full flex-3 items-center">
        <div className="flex w-full justify-center md:justify-start">
          <MemberCard
            title={language === "bn" ? "মাননীয় উপদেষ্টা" : "Adviser"}
            name={
              language === "bn" ? "জনাব মোঃ নাহিদ ইসলাম" : "Mr. Md. Nahid Islam"
            }
            role={language === "bn" ? "বিস্তারিত" : "Details"}
            image="https://ictd.portal.gov.bd/sites/default/files/files/ictd.portal.gov.bd/npfblock//Honorable%20Adviser%20%281%29.jpg"
          />
        </div>
        <div>
          <Song />
        </div>
        <div className="flex w-full justify-center md:justify-end">
          <MemberCard
            title={language === "bn" ? "সচিব" : "Secretary"}
            name={
              language === "bn"
                ? "জনাব মোঃ সামসুল আরেফিন"
                : "Mr. Md. Shamsul Arefin"
            }
            role={language === "bn" ? "বিস্তারিত" : "Details"}
            image="https://ictd.portal.gov.bd/sites/default/files/files/ictd.portal.gov.bd/npfblock//Honorable%20Secretary%20Sir.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default MembersSection;
