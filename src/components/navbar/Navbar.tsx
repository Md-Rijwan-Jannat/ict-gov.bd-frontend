import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectValue,
} from "../ui/select";
import PrimaryButton from "../button/PrimaryButton";
import { useLanguage } from "@/context/LanguageContextProvider";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="flex justify-between items-center gap-5 w-full bg-white-400 px-2 py-2">
      <div className="flex items-center gap-5">
        <p className="text-[8px] md:text-sm">
          {language === "bn"
            ? "বাংলাদেশ জাতীয় তথ্য বাতায়ন"
            : "National Portal of Bangladesh"}
        </p>
        <Select>
          <SelectTrigger className="w-[130px] md:w-[180px] rounded-[8px] border-black-500 text-[8px] md:text-sm">
            <SelectValue
              placeholder={language === "bn" ? "অফিসের ধরণ" : "Office Type"}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="text-[8px] md:text-sm">
                {language === "bn" ? "অফিসের ধরণ" : "Office Type"}
              </SelectLabel>
              <SelectItem
                className="text-[8px] md:text-sm"
                value="মন্ত্রণালয়/বিভাগ"
              >
                {language === "bn" ? "মন্ত্রণালয়/বিভাগ" : "Ministry/Division"}
              </SelectItem>
              <SelectItem
                className="text-[8px] md:text-sm"
                value="অধিদপ্তর বাতায়ন"
              >
                {language === "bn" ? "অধিদপ্তর বাতায়ন" : "Directorate Portal"}
              </SelectItem>
              <SelectItem
                className="text-[8px] md:text-sm"
                value="বিভাগীয় বাতায়ন"
              >
                {language === "bn" ? "বিভাগীয় বাতায়ন" : "Divisional Portal"}
              </SelectItem>
              <SelectItem className="text-[8px] md:text-sm" value="জেলা বাতায়ন">
                {language === "bn" ? "জেলা বাতায়ন" : "District Portal"}
              </SelectItem>
              <SelectItem
                className="text-[8px] md:text-sm"
                value="ইউনিয়ন বাতায়ন"
              >
                {language === "bn" ? "ইউনিয়ন বাতায়ন" : "Union Portal"}
              </SelectItem>
              <SelectItem className="text-[8px] md:text-sm" value="অন্যান্য">
                {language === "bn" ? "অন্যান্য" : "Others"}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <PrimaryButton
        onClick={toggleLanguage}
        text={language === "bn" ? "English" : "বাংলা"}
      />
    </nav>
  );
};

export default Navbar;
