import logo from "../assets/test_mission.png";
import hero from "../assets/r5.jpeg";
import mission_2 from "../assets/mission-2.jpg";
import mission_1 from "../assets/m11.jpg";
import mission_3 from "../assets/m9.jpg";

import { ABOUT } from "../constants";

import { motion } from "framer-motion";
import Mission from "../components/Mission";
import Review from "../components/Review";

const Mission_page = () => {
  return (
    <>
      <section id="mission_page" className="relative flex h-screen ">
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden  ">
          {/* <video
            src={video}
            className="h-full w-full object-cover"
            muted
            autoPlay
            loop
            playsInline
            poster={hero}
          ></video> */}
          <motion.img
            src={hero}
            className="h-full w-full object-cover"
            alt="Kids planting trees"
          ></motion.img>
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from70% to-black"></div>
        <div className="relative z-20 flex h-screen flex-col justify-end pb-60 ">
          <motion.img
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 50 }}
            //whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "linear", delay: 1 }}
            src={logo}
            alt="restaura"
            className="w-full p-4"
          ></motion.img>
        </div>
      </section>

      <section className="container mt-20 mx-auto " id="mentor">
        <h2 className="text-center text-4xl lg:text-4xl">
          Providing <span className="gradient-text-green">love</span>,{" "}
          <span className="gradient-text-green">care</span>, and a{" "}
          <span className="gradient-text-green">brighter future</span> for every
          child in need
        </h2>

        <div className="py-10 flex flex-wrap">
          <div className="w-full h-auto p-6 lg:w-1/2">
            <img
              src={mission_1}
              className="rounded-3xl w-full h-auto lg:rotate-3"
            />
          </div>
          <div className="w-full px-2 lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl tracking-tighter lg:text-6xl"
            >
              <span className="gardient-text-green">Mission</span> Statement
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 mt-1 h-2 w-36 bg-yellow-400 lg:rotate-3"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl"
            >
              Our mission is to provide a safe heaven where orphaned and
              abandoned children can grow in a loving environment, receive a
              quality education, and develop the life skills needed to lead
              independent and fulfilling lives.
            </motion.p>
          </div>
        </div>
        {/* <section id="second-part">
          <div className="bottom-0 left-0 right-0 -z-20 h-full w-full overflow-hidden  ">
            <motion.img
              src={mission_2}
              className="h-full w-full object-cover"
              alt="Kids planting trees"
            ></motion.img>
          </div>
        </section> */}
        <section className="container mt-20 mx-auto " id="about">
          <h2 className=" text-center text-4xl  lg:text-4xl">
            {" "}
            <span className="gradient-text-green">Our Vision</span>
          </h2>
          <div className="py-10 flex flex-wrap">
            <div className="w-full px-2 lg:w-1/2">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl tracking-tighter lg:text-6xl"
              >
                Our <span className="gradient-text-green">Long Term </span>Goal
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8 mt-1 h-2 w-36 bg-rose-300 lg:rotate-3"
              ></motion.div>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl"
              >
                Our vision is to break the cycle of poverty and abandonment by
                raising a generation of empowered, educated, and emotionally
                resilient children who can contribute to society and lead
                fulfilling lives.
              </motion.p>
            </div>
            <div className="w-full p-6 lg:w-1/2">
              <img src={mission_3} className="rounded-3xl lg:rotate-3" />
            </div>
          </div>
        </section>

        <Mission />
        <Review />
      </section>
    </>
  );
};

export default Mission_page;
