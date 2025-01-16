import React from "react";
import logo from "../assets/test_mission.png";
import hero from "../assets/r5.jpeg";
import mission_2 from "../assets/mission-2.jpg";
import mission_1 from "../assets/m11.jpg";
import mission_3 from "../assets/m9.jpg";
import activity_hero from "../assets/activity.jpg";
import nutrition_img from "../assets/mid_day_meal.jpg";
import chess from "../assets/chess.jpeg";
import story1 from "../assets/r1.jpeg";
import story2 from "../assets/kids_play.jpeg";
import story3 from "../assets/r3.jpeg";
import story4 from "../assets/r4.jpeg";
import story5 from "../assets/m6.jpg";

import { ABOUT } from "../constants";

import { motion } from "framer-motion";
import Mission from "../components/Mission";
import Review from "../components/Review";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: story1,
    thumbnail: story1,
  },
  {
    original: story2,
    thumbnail: story2,
  },
  {
    original: story3,
    thumbnail: story3,
  },
  {
    original: story4,
    thumbnail: story4,
  },
  {
    original: story5,
    thumbnail: story5,
  },
];
const Activities = () => {
  return (
    <>
      {/* <section id="activities" className="container mt-20 mx-auto">
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
      </section> */}
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
            src={mission_1}
            className="h-full w-full object-cover"
            alt="Kids planting trees"
          ></motion.img>
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from70% to-black"></div>
        {/* <div className="relative z-20 flex h-screen flex-col justify-end pb-60 ">
          <motion.img
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 50 }}
            //whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "linear", delay: 1 }}
            src={activity_hero}
            alt="restaura"
            className="w-full p-4"
          ></motion.img>
        </div> */}
      </section>

      <section className="container mt-20 mx-auto " id="mentor">
        <h2 className="text-center text-4xl lg:text-4xl">
          Our activities aim to{" "}
          <span className="gradient-text-orange">empower</span>,{" "}
          <span className="gradient-text-orange">educate</span>, and a{" "}
          <span className="gradient-text-orange">uplift</span> every child in
          need
        </h2>

        <div className="py-10 flex flex-wrap">
          <div className="w-full px-2 lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl tracking-tighter lg:text-6xl "
            >
              <span className="">Our Activities</span>
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
              At Prajakirana Seva Charitable Trust, we are committed to creating
              a brighter future for orphaned children. Our activities aim to
              empower, educate, and uplift underprivileged youth by providing
              them with opportunities to thrive
            </motion.p>
          </div>
          <div className="w-full h-auto p-6 lg:w-1/2">
            <img
              src={mission_1}
              className="rounded-3xl w-full h-auto lg:rotate-3"
            />
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
        <section className="container mt-20 mx-auto " id="activities">
          <h2 className=" text-center text-4xl  lg:text-4xl">
            {" "}
            <span className="gradient-text-orange">
              Activities which include ....
            </span>
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
                <span className="gradient-text-orange">Education </span>
                Initiatives
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                perspiciatis accusamus ullam sed enim vitae dolores inventore,
                rerum ipsa? Accusamus ipsum temporibus provident explicabo
                necessitatibus illum deserunt fugiat, quia inventore.
              </motion.p>
            </div>
            <div className="w-full p-6 lg:w-1/2">
              <img src={mission_3} className="rounded-3xl lg:rotate-3" />
            </div>
          </div>
          <div className="py-10 flex flex-wrap">
            <div className="w-full p-6 lg:w-1/2">
              <img
                src={chess}
                className="rounded-3xl lg:transform lg:-rotate-3"
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
                <span className="gradient-text-orange">Skill </span>Development
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium saepe nihil quod corrupti eaque iure veritatis unde
                ullam provident sit enim, tempore vitae molestiae adipisci
                fugiat. Modi quaerat nobis eos.
              </motion.p>
            </div>
          </div>
          <div className="py-10 flex flex-wrap">
            <div className="w-full px-2 lg:w-1/2">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl tracking-tighter lg:text-6xl"
              >
                <span className="gradient-text-orange">
                  Health & Nutrition{" "}
                </span>
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
              <img src={nutrition_img} className="rounded-3xl lg:rotate-3" />
            </div>
          </div>
        </section>

        {/* <Mission />
        <Review /> */}
        <section className="container mt-20 mb-20 mx-auto " id="about">
          <h2 className=" text-center text-4xl mb-20 lg:text-4xl">
            {" "}
            <span className="gradient-text-orange">Gallery</span>
          </h2>
          <div>
            <ImageGallery
              items={images}
              showPlayButton={false}
              showFullscreenButton={false}
              slideInterval={1000}
              slideOnThumbnailOver={true}
              showIndex={true}
            />
            ;
          </div>
        </section>
      </section>
    </>
  );
};

export default Activities;
