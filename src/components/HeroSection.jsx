import logo from "../assets/logo.png";
import NGOMainlogo from "../assets/NGOMainlogo.png";
import hero from "../assets/r5.jpeg";
import video from "../assets/NGOvideo.mp4";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
        <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
          <LazyLoadImage
            effect="blur"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 50 }}
            //whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "linear", delay: 1 }}
            src={logo}
            alt="restaura"
            className="w-full p-4"
          ></LazyLoadImage>
          <p className="p-4 text-lg tracking-tighter  text-white">Paris</p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
