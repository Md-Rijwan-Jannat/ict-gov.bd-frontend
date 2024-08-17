import { motion } from "framer-motion";

interface IMemberProps {
  title: string;
  name: string;
  role: string;
  image: string;
}

const MemberCard = ({ title, name, role, image }: IMemberProps) => {
  return (
    <div className="bg-white border rounded-[4px] overflow-hidden transform transition-transform duration-300 w-[280px]">
      <motion.h2
        className="rounded-t-[4px] bg-primaryColor px-3 py-3 text-white-50 text-lg md:text-xl font-medium text-center"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        {title}
      </motion.h2>
      <img src={image} alt={name} className="w-full h-[320px] object-cover" />
      <div className="p-6 text-center">
        <motion.p
          className="text-sm md:text-lg text-gray-700 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {name}
        </motion.p>
        <motion.button
          className="text-secondaryColor font-semibold underline transition-colors duration-300 text-center w-full text-xs md:text-sm"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {role}
        </motion.button>
      </div>
    </div>
  );
};

export default MemberCard;
