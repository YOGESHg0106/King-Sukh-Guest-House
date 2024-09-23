// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"; // Import CSS file for the footer styles

const Footer = () => {
  return (
    <footer className="footer-container py-4 bg-dark text-left">
      <Container>
        <Row className="d-flex justify-content-between align-items-start flex-wrap">
          <Col md={3} sm={12} className="footer-col">
            <h4 className="footer-heading">Kingsukh Guest House</h4>
            <p className="footer-heading">
              Discover a world of comfort, luxury, and adventure as you explore
              our curated selection of hotels, making every moment of your
              getaway truly extraordinary.
            </p>
            <a href="#rooms" className="btn btn-warning text-dark">
              BOOK NOW
            </a>
          </Col>
          <Col md={3} sm={12} className="footer-col">
            <h4 className="footer-heading">QUICK LINKS</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="footer-link">
                  Browse Destinations
                </a>
              </li>
              <li>
                <a href="#home" className="footer-link">
                  Special Offers & Packages
                </a>
              </li>
              <li>
                <a href="#home" className="footer-link">
                  Room Types & Amenities
                </a>
              </li>
              <li>
                <a href="#home" className="footer-link">
                  Customer Reviews & Ratings
                </a>
              </li>
              <li>
                <a href="#home" className="footer-link">
                  Travel Tips & Guides
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={12} className="footer-col">
            <h4 className="footer-heading">OUR SERVICES</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="footer-link">
                  Concierge Assistance
                </a>
              </li>
              <li>
                <a href="#home" className="footer-link">
                  Flexible Booking Options
                </a>
              </li>
              <li>
                <a href="#home" className="footer-link">
                  Airport Transfers
                </a>
              </li>
              <li>
                <a href="#home" className="footer-link">
                  Wellness & Recreation
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={12} className="footer-col">
            <h4 className="footer-heading">CONTACT US</h4>
            <p className="footer-text">
              Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
              723156
              <br />
              Email:{" "}
              <a href="mailto:kkghosh0099@gmail.com" className="footer-link">
                kkghosh0099@gmail.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+919007062180" className="footer-link">
                +91 9007062180
              </a>
            </p>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Social-icons/facebook.png"
                  alt="Facebook"
                  width="30"
                  height="30"
                />
              </a>
              <a
                href="https://www.instagram.com/kingsukhguesthouse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Social-icons/instagram.png"
                  alt="Instagram"
                  width="30"
                  height="30"
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Social-icons/youtube.png"
                  alt="YouTube"
                  width="30"
                  height="30"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Social-icons/twitter.png"
                  alt="Twitter"
                  width="30"
                  height="30"
                />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="mt-4 footer-heading text-center">
              Copyright &copy; 2024 Kingsukh Guest House. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
