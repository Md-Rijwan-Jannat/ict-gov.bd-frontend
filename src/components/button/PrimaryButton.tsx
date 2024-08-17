import { motion } from "framer-motion";
import { Button } from "../ui/button";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
}

const PrimaryButton = ({ text, onClick }: PrimaryButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        onClick={onClick}
        className="text-black-70 rounded-full border border-black-400 text-[8px] md:text-sm px-6 hover:bg-black-200 hover:border-none 
                   transition-colors duration-500 ease-in-out w-[80px] md:[110px]"
      >
        {text}
      </Button>
    </motion.div>
  );
};

export default PrimaryButton;
