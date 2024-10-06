import logo from "../assets/logo.png";
import NGOMainlogo from "../assets/NGOMainlogo.png";
import Contribute_img from "../assets/Contribute_imgs.png";
import hero from "../assets/r5.jpeg";
import video from "../assets/NGOvideo.mp4";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import main from "../assets/main.png";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

const HeroSection = () => {
  return (
    <>
      <section className="relative flex h-screen items-center justify-center ">
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden  ">
          <video
            src={video}
            className="h-full w-full object-cover"
            muted
            autoPlay
            loop
            playsInline
            poster={hero}
          ></video>
          {/* <motion.img
            src={hero}
            className="h-full w-full object-cover"
            alt="hero"
          ></motion.img> */}
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from70% to-black"></div>
        <div className="relative z-20 flex w-screen h-screen flex-col justify-end ">
          <LazyLoadImage
            effect="blur"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 50 }}
            //whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "linear", delay: 1 }}
            src={main}
            alt="contribution img"
            className="w-[60vw] p "
          ></LazyLoadImage>
          <p className="p-4 text-lg tracking-tighter  text-white">Bengaluru</p>
        </div>
        {/* <div className="">
          <motion.div className="text-center justify-center inline">
            <Button
              colorScheme="whiteAlpha"
              variant="ghost"
              className="px-4 py-2 bg-pink-500 text-white rounded-xl
           hover:bg-pink-600"
            >
              <Link to="/contribute"> Donate Now </Link>
            </Button>
          </motion.div>
        </div> */}
      </section>
    </>
  );
};

export default HeroSection;
