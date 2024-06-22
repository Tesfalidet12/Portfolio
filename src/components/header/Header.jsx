import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/me.png";
import Socials from "./Socials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tesfalidet Birhanu</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <Socials />
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
