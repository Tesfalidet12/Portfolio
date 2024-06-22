import React from 'react'
import './about.css'
import DEV from '../../assets/dev.png'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const About = () => {
  return (
   <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about_container'>
      <div className="about_me">
        <div className="about_me-img">
          <img src={DEV} alt="About img" />
        </div>
      </div>

      <div className="about_content">
        <div className="about_cards">
          <article className='about-card'>
            <FaAward className='about_icon' />
            <h5>Experience</h5>
            <small>Personal Projects</small>
          </article>
          <article className='about-card'>
            <FiUsers className='about_icon' />
            <h5>Clients</h5>
            <small>Worldwide</small>
          </article>
          <article className='about-card'>
          <AiOutlineFundProjectionScreen className='about_icon' />
            <h5>Projects</h5>
            <small>+10</small>
          </article>
        </div>

        <p>
        Welcome to my portfolio! I'm a fresh web developer passionate about crafting unique digital experiences. With expertise in web development technologies and an eye for design, I deliver seamless websites that exceed expectations. Let's collaborate and create something amazing together! 
        </p>
         <a href="#contact" className='btn btn-primary'> Let's Talk</a>
      </div>

    </div>

   </section>
  )
}

export default About