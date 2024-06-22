import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LOGO from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer_logo">
        TESFA
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100010249929078">
          <FaFacebook />
        </a>
        <a href="https://twitter.com">
          <FaXTwitter />
        </a>
      </div>

      <div className="copyright">
        <small>&copy; TESFALIDET BIRHANU. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
