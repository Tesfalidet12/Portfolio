import React from "react";
import "./contact.css";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_1w401te",
      "template_9c5th2k",
      formRef.current,
      "R-Njp9jaImKAdKCjD"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMarkEmailUnread className="contact_option-icon" />
            <h4>Email</h4>
            <h5>tesfalidetbirhanu82@gmail.com</h5>
            <a href="mailto:tesfalidetbirhanu82@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Tesfalidet Birhanu Roha</h5>
            <a
              href="https://m.me/profile.php?id=100010249929078"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <FaWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+251980354460</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+251980354460"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={formRef} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Youremail" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
