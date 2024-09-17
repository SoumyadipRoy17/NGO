import logo from "../assets/test_mission.png";
import hero from "../assets/r5.jpeg";

import { motion } from "framer-motion";

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
    </>
  );
};

export default Mission_page;
