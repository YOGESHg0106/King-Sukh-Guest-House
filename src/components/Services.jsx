import React from "react";
import "./Services.css"; // Assuming you will create a separate CSS file for styling
import "remixicon/fonts/remixicon.css"; // Importing Remix Icons for the icons you're using

const Services = () => {
  return (
    <section className="service" id="service">
      <div className="service__wrapper">
        {/* Main content box on top */}
        <div className="service__container">
          <div className="service__content">
            <p className="section__subheader">
              <span className="line-before"></span>SERVICES
            </p>
            <h2 className="section__header">Strive Only For The Best.</h2>
            <ul className="service__list">
              <li>
                <span>
                  <i className="ri-shield-star-line"></i>
                </span>
                High Class Security
              </li>
              <li>
                <span>
                  <i className="ri-24-hours-line"></i>
                </span>
                24 Hours Room Service
              </li>
              <li>
                <span>
                  <i className="ri-restaurant-2-fill"></i>
                </span>
                Restaurant
              </li>
              <li>
                <span>
                  <i className="ri-map-2-line"></i>
                </span>
                Tourist Guide Support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
