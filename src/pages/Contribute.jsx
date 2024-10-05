import React, { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import qr from "../assets/qr.jpg";

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
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Button to open the modal */}
      <div className="text-center justify-center inline">
        <Button
          colorScheme="whiteAlpha"
          variant="ghost"
          className="px-4 py-2 bg-yellow-500 text-white rounded-3xl
           hover:bg-yellow-600"
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
  );
};

export default Contribute;
