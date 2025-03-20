import { CONTACT } from "../constants";
import { motion } from "framer-motion";
const ContactSection = () => {
  return (
    <>
      <section id="contact" className="container mx-auto py-16">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl tracking-tighter lg:text-6xl text-center"
          // className="mb-8  text-center text-3xl lg:text-4xl"
        >
          Contact Us
        </motion.h2>
        <motion.div className="text-neutral-400">
          {CONTACT.map((detail) => (
            <motion.p
              key={detail.key}
              // className=" "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="my-20 border-b-2 border-dotted border-neutral-700 text-center text-2xl tracking-tighter lg:text-3xl "
            >
              {detail.value}
            </motion.p>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default ContactSection;
