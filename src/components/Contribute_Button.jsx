import { Button } from "flowbite-react";
import React from "react";

const Contribute_Button = () => {
  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 bg-pink-500 text-white p-4 rounded-full shadow-lg">
        <Button color="" size="sm" className=" cursor-pointer">
          <a className="text-black text-xl mx-auto" href="/contribute">
            Donate Now ❤️
          </a>{" "}
          {/* Button linking to the donation page */}
        </Button>
      </div>
    </>
  );
};

export default Contribute_Button;
