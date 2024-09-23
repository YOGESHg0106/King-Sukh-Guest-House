// src/components/Header.jsx

import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import UserInfoDropdown from "./UserInfoDropdown"; // Import your new component
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const { user } = useAuth();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    console.log("User in Header:", user);
  }, [user]);

  return (
    <header className="header-section" id="home">
      <Navbar
        expand="lg"
        className="navbar-custom"
        fixed="top"
        onToggle={() => setIsNavExpanded(!isNavExpanded)}
      >
        <Container>
          <Navbar.Brand href="#home" className="brand-text">
            <img
              src="/Images/navbar-image.png"
              alt="King Sukh Logo"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            King Sukh Palace
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="nav-link-custom">
                About
              </Nav.Link>
              <Nav.Link href="#services" className="nav-link-custom">
                Services
              </Nav.Link>
              <Nav.Link href="#rooms" className="nav-link-custom">
                Rooms
              </Nav.Link>
              <Nav.Link href="#gallery" className="nav-link-custom">
                Gallery
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-link-custom">
                Contact
              </Nav.Link>

              {/* Only show dropdown if user is logged in */}
              {user ? (
                <div className="user-info-container">
                  <UserInfoDropdown />
                </div>
              ) : (
                <Button
                  variant="outline-primary"
                  className="ms-2"
                  href="/login"
                >
                  Login
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="hero-section text-center">
        <div className="overlay"></div>
        <h1 data-aos="fade-down">
          Make Yourself At Home <br />
          <span className="guest-house">In Our Guest House.</span>
        </h1>
        <p data-aos="fade-up">
          A perfect destination for your comfort and luxury
        </p>
        <Button
          variant="primary"
          href="#rooms"
          className="cta-button"
          data-aos="zoom-in"
        >
          BOOK NOW
        </Button>
      </div>
    </header>
  );
};

export default Header;
