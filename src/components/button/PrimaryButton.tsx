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
        className="bg-primaryColor text-white-50 rounded text-[8px] md:text-sm px-6 hover:bg-hoverPrimaryColor 
                   transition-colors duration-500 ease-in-out"
      >
        {text}
      </Button>
    </motion.div>
  );
};

export default PrimaryButton;
