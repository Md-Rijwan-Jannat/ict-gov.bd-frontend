import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Navbar = () => {
  return (
    <div className="bg-white-400 px-2 py-3">
      <nav className="flex justify-start gap-5 items-center">
        <div>
          <p className="text-sm">বাংলাদেশ জাতীয় তথ্য বাতায়ন</p>
        </div>
        <Select>
          <SelectTrigger className="w-[180px] rounded-[8px] border-black-500">
            <SelectValue placeholder="অফিসের ধরণ" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>অফিসের ধরণ</SelectLabel>
              <SelectItem value="মন্ত্রণালয়/বিভাগ">মন্ত্রণালয়/বিভাগ</SelectItem>
              <SelectItem value="অধিদপ্তর বাতায়ন">অধিদপ্তর বাতায়ন</SelectItem>
              <SelectItem value="বিভাগীয় বাতায়ন">বিভাগীয় বাতায়ন</SelectItem>
              <SelectItem value="জেলা বাতায়ন">জেলা বাতায়ন</SelectItem>
              <SelectItem value="ইউনিয়ন বাতায়ন">ইউনিয়ন বাতায়ন</SelectItem>
              <SelectItem value="অন্যান্য">অন্যান্য</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </nav>
    </div>
  );
};

export default Navbar;
