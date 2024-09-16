import { REVIEW } from "../constants";
import xaviour from "../assets/Rahul_sir.jpeg";
import r1 from "../assets/r1.jpeg";
import r2 from "../assets/r2.jpeg";
import r3 from "../assets/r3.jpeg";
import r4 from "../assets/r4.jpeg";
import { motion } from "framer-motion";

const containerVarints = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const ItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Review = () => {
  return (
    <>
      <section className="container mx-auto mb-8 mt-12" id="review">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={containerVarints}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <motion.p
            variants={ItemVariants}
            className="mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:mt-40 lg:text-[3.5rem]"
          >
            {REVIEW.content}
          </motion.p>
          <motion.div
            variants={ItemVariants}
            className="flex items-center justify-center gap-6"
          >
            <img
              src={xaviour}
              width={80}
              height={80}
              alt={REVIEW.name}
              className="rounded-full border"
            />
            <div className="tracking-tighter">
              <h6>{REVIEW.name}</h6>
              <p className="text-sm text-neutral-500 ">{REVIEW.profession}</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row"
        >
          {[r1, r2, r3, r4].map((customer, index) => (
            <motion.img
              variants={ItemVariants}
              key={index}
              src={customer}
              alt="customer"
              width={80}
              height={80}
              className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover "
            />
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Review;
