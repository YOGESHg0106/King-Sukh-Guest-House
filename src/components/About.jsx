// src/components/About.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./About.css"; // Ensure the correct styles are applied

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-right">
            <h3 className="about-title">About Us</h3>
            <h1 className="about-heading">The Best Holidays Start Here!</h1>
            <p className="about-text">
              King Sukh Guest House is the perfect place for relaxation and
              luxury. Embark on a tranquil journey at our Kingsukh Guest House,
              enveloped by the scenic allure of Biharinath Hill, Baranti Hill,
              Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon
              Dam, and the captivating Panchat Dam. Revel in the embrace of
              comfort, relish delightful meals, and unwind in our verdant garden
              oasis. Your ideal retreat beckons, promising a harmonious blend of
              nature's beauty and heartfelt hospitality. Explore the hidden gems
              of Purulia, creating memories that linger long after your stay.
            </p>
            <p className="about-address">
              Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
              723156 <br /> Contact us: +91 9007062180
            </p>
            <Button variant="primary" className="cta-button" href="#rooms">
              Book Now
            </Button>
          </Col>
          <Col md={6} data-aos="fade-left">
            <div className="about-image-container">
              <img
                src={`${import.meta.env.BASE_URL}Images/About.jpg`}
                alt="About King Sukh"
                className="about-image img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
