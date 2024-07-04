import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Socials = () => {
  return (
    <div className="socials">
      <a
        href="www.linkedin.com/in/tesfalidet-birhanu-943a80252"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/Tesfalidet12" target="_blank">
        <FaGithub />
      </a>
      <a href="http://whatsapp.com" target="_blank">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default Socials;
