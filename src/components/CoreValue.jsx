import { Card } from "flowbite-react";
import { motion } from "framer-motion";

const CoreValue = ({ image, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="lg:rotate-3"
    >
      <Card
        className="max-w-sm mb-5  lg:ml-5 rounded-lg "
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={image}
      >
        <motion.h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </motion.h5>
        <motion.p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </motion.p>
      </Card>
    </motion.div>
  );
};

export default CoreValue;

// <div classNameName="flex flex-col items-center text-center p-4 ">
//   <img
//     src={image}
//     alt={title}
//     className="w-24 h-24 mb-4 rounded-full shadow-lg"
//   />
//   <h3 className="text-xl font-bold mb-2">{title}</h3>
//   <p className="text-lg">{description}</p>
// </div>
