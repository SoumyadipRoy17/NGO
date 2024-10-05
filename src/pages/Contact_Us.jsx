import React from "react";

import { motion } from "framer-motion";
const Contact_Us = () => {
  return (
    <>
      <section id="activities" className="container mt-20 mx-auto">
        <div className="py-10 flex flex-wrap">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl tracking-tighter lg:text-6xl"
          >
            Coming <span className="gradient-text">Soon... </span>
          </motion.h2>
        </div>
      </section>
    </>
  );
};

export default Contact_Us;
