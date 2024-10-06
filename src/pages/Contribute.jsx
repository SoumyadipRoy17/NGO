import React, { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import qr from "../assets/qr.jpg";
import { motion } from "framer-motion";
import donate_sign from "../assets/donate_sign.jpg";
import Contribute_img from "../assets/Contribute_imgs.png";
import { ABOUT } from "../constants";
import about from "../assets/kid_with_football.png";
import CoreValue from "../components/CoreValue";

const Contribute = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control modal visibility

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="container mx-auto " id="contribute">
      <section id="donation_logo" className="relative flex h-screen ">
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
            src={donate_sign}
            className="h-full w-full object-cover"
            alt="Donation logo"
          ></motion.img>
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from70% to-black"></div>
        <div className="relative z-20 flex h-screen flex-col justify-end pb-60 ">
          <motion.img
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 50 }}
            //whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "linear", delay: 1 }}
            src={Contribute_img}
            alt="restaura"
            className="w-full p-4"
          ></motion.img>
        </div>
      </section>

      <section id="contribute_statement" className="container mt-20 mx-auto">
        <div className="py-10 flex flex-wrap">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl tracking-tighter lg:text-6xl"
          >
            <span className="gradient-text-pink">
              {" "}
              Let's Build a better world together !{" "}
            </span>{" "}
          </motion.h2>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center">
        {/* Button to open the modal */}
        <div className="text-center justify-center inline">
          <Button
            colorScheme="whiteAlpha"
            variant="ghost"
            className="px-4 py-2 h-20 bg-pink-500 text-white rounded-full
           hover:bg-pink-600 border-2 border-black"
            onClick={openModal}
          >
            <span className="">Contribute to Us </span> ❤️
          </Button>
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
            Be the Change: Help Us Transform Lives Today
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
            Your generosity helps us provide essential care, education, and
            support to vulnerable communities and children in need. Every
            contribution—no matter the size—empowers us to continue our mission
            and bring hope to those who need it the most.
          </motion.p>
        </div>
        <div className="w-[50vw] p-6 lg:w-1/2">
          <img src={about} className="rounded-3xl lg:rotate-3" />
        </div>
      </div>
      <CoreValue
        image={donate_sign}
        title="Donation"
        description="All donations are valuable ! "
      />
      <div className="flex flex-col items-center justify-center ">
        {/* Button to open the modal */}
        <div className="text-center justify-center inline">
          <Button
            colorScheme="whiteAlpha"
            variant="ghost"
            className="px-4 py-2 bg-pink-500 text-white rounded-xl
           hover:bg-pink-600"
            onClick={openModal}
          >
            Contribute to Us ❤️
          </Button>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              {/* Image in the modal */}
              <p className="text-pink-600 text-lg ml-20 ">
                {" "}
                Your Donations are Valuable ! ❤️{" "}
              </p>
              <img src={qr} alt="Your Image" className="rounded-lg" />

              {/* Close button */}
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={closeModal}
              >
                &times; {/* Close icon */}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contribute;
