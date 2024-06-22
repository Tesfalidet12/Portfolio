import React from "react";
import "./nav.css";
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { TfiBook } from "react-icons/tfi";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => {
          setActiveNav("#");
        }}
        className={activeNav === "#" ? "active" : ""}
      >
        <CiHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveNav("#about");
        }}
        className={activeNav === "#about" ? "active" : ""}
      >
        <CiUser />
      </a>
      <a
        href="#experience"
        onClick={() => {
          setActiveNav("#experience");
        }}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <TfiBook />
      </a>
      <a
        href="#services"
        onClick={() => {
          setActiveNav("#services");
        }}
        className={activeNav === "#services" ? "active" : ""}
      >
        <MdOutlineHomeRepairService />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActiveNav("#contact");
        }}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <FaRegMessage />
      </a>
    </nav>
  );
};

export default Nav;
