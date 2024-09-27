// src/components/ContactUs.jsx
import React from "react";
import "./Contact.css";

const ContactUs = () => {
  return (
    <section id="contact" className="section1">
      <div className="container1">
        <div className="contactInfo1">
          <h2>Contact Info</h2>
          <ul>
            <li>
              <img
                src={`${import.meta.env.BASE_URL}/Social-icons/location.png`}
                alt="location"
              />
              <span>
                Beside Barshal Water Tank, Manpur, Barhanti,
                <br />
                West Bengal 723156
              </span>
            </li>
            <li>
              <img
                src={`${import.meta.env.BASE_URL}/Social-icons/mail.png`}
                alt="mail"
              />
              <span>
                <a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a>
              </span>
            </li>
            <li>
              <img
                src={`${import.meta.env.BASE_URL}/Social-icons/call.png`}
                alt="call"
              />
              <span>
                <a href="tel:+919007062180">+91 9007062180</a>
              </span>
            </li>
          </ul>

          <div className="sci">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}/Social-icons/youtube.png`}
                alt="YouTube"
              />
            </a>
            <a
              href="https://www.instagram.com/kingsukhguesthouse/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}/Social-icons/instagram.png`}
                alt="Instagram"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}/Social-icons/facebook.png`}
                alt="Facebook"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${import.meta.env.BASE_URL}/Social-icons/twitter.png`}
                alt="Twitter"
              />
            </a>
          </div>
        </div>

        <div className="contactForm1">
          <h2>Send a Message</h2>
          <div className="formBox1">
            <div className="inputBox1 w50">
              <span>First Name</span>
              <input type="text" placeholder="Enter your first name" required />
            </div>
            <div className="inputBox1 w50">
              <span>Last Name</span>
              <input type="text" placeholder="Enter your last name" required />
            </div>
            <div className="inputBox1 w50">
              <span>Email Address</span>
              <input
                type="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="inputBox1 w50">
              <span>Mobile Number</span>
              <input
                type="text"
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div className="inputBox1 w100">
              <span>Message</span>
              <textarea
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <div className="inputBox1 w100">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
