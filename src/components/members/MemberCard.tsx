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
        className="rounded-t-[4px] bg-primaryColor px-3 py-3 text-white-50 text-sm md:text-xl font-semibold text-center"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        {title}
      </motion.h2>
      <img src={image} alt={name} className="w-full h-[320px] object-cover" />
      <div className="p-6 text-center">
        <motion.h2
          className="text-xl md:text-2xl font-bold text-primaryColor mb-2 whitespace-nowrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {title}
        </motion.h2>
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          {role}
        </motion.button>
      </div>
    </div>
  );
};

export default MemberCard;
