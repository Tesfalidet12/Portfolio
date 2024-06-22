import React from "react";
import "./services.css";
import { FaCheck } from "react-icons/fa6";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Web Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCheck className="service_list-icon" />
              <p>Transforming ideas into captivating website designs.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Engaging interfaces for seamless user experiences. </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Pixel-perfect designs with meticulous attention to detail.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Modern, fresh, and trend-conscious web design solutions.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                {" "}
                Creating visually stunning websites that leave a lasting
                impression.
              </p>
            </li>
          </ul>
        </article>

        {/* End Of Web Design */}

        <article className="service">
          <div className="service_head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCheck className="service_list-icon" />
              <p>Creating responsive, mobile-friendly website interfaces.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Implementing interactive features and dynamic functionality.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Optimizing performance for fast, seamless user experience.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Ensuring cross-browser compatibility and consistent rendering.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Collaborating to translate visual concepts into functional code.
              </p>
            </li>
          </ul>
        </article>

        {/* End Of Frontend  */}

        <article className="service">
          <div className="service_head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCheck className="service_list-icon" />
              <p>Creating robust and scalable backend systems.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Developing efficient APIs for seamless data integration.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Implementing secure authentication and data protection measures.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Optimizing database queries for enhanced performance.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Integrating third-party services to extend application
                functionality.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
