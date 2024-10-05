import { useState } from "react";

import NGOlogo from "../assets/NGOlogo.png";
import { LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const NavbarSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }

    setIsMobileMenuOpen(false);
  };
  return (
    <>
      <nav className="fixed top-0 z-50 flex w-full flex-col items-center justify-center h-[10vh] ">
        <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
          <img src={NGOlogo} alt="logo" width={30} height={30} />
          <div className="hidden space-x-6 lg:flex">
            {LINKS.map((link, index) => (
              <a
                key={index}
                href={`${link.targetId}`}
                className={`text-sm ${
                  index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""
                } hover:opacity-50 text-white `}
                // onClick={(e) => handleScroll(e, link.targetId)}
              >
                {link.text}
              </a>
            ))}
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="  backdrop-blur-lg  w-full p-4  lg:hidden">
            {LINKS.map((link, index) => (
              <a
                key={index}
                href={`${link.targetId}`}
                className=" block p-4 hover:opacity-50 uppercase tracking-tighter "
                // onClick={(e) => handleScroll(e, link.targetId)}
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default NavbarSection;
