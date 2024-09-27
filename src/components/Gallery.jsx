// src/components/Gallery.jsx
import React from "react";
import { Container } from "react-bootstrap";
import "./Gallery.css";

const images = [
  { src: `${import.meta.env.BASE_URL}/Gallery/gallery1.jpg`, alt: "Gallery 1" },
  {
    src: `${import.meta.env.BASE_URL}/Gallery/gallery2.webp`,
    alt: "Gallery 2",
  },
  {
    src: `${import.meta.env.BASE_URL}/Gallery/gallery3.webp`,
    alt: "Gallery 3",
  },
  { src: `${import.meta.env.BASE_URL}/Gallery/gallery4.jpg`, alt: "Gallery 4" },
  { src: `${import.meta.env.BASE_URL}/Gallery/gallery5.jpg`, alt: "Gallery 5" },
  { src: `${import.meta.env.BASE_URL}/Gallery/gallery6.jpg`, alt: "Gallery 6" },
  {
    src: `${import.meta.env.BASE_URL}/Gallery/gallery7.webp`,
    alt: "Gallery 7",
  },
  { src: `${import.meta.env.BASE_URL}/Gallery/gallery8.jpg`, alt: "Gallery 8" },
  { src: `${import.meta.env.BASE_URL}/Gallery/gallery9.jpg`, alt: "Gallery 9" },
  {
    src: `${import.meta.env.BASE_URL}/Gallery/gallery10.jpg`,
    alt: "Gallery 10",
  },
  {
    src: `${import.meta.env.BASE_URL}/Gallery/gallery11.webp`,
    alt: "Gallery 11",
  },
  {
    src: `${import.meta.env.BASE_URL}/Gallery/gallery12.jpg`,
    alt: "Gallery 12",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section py-5">
      <Container>
        <h2 className="gallery-title text-center mb-5" data-aos="fade-up">
          GALLERY
        </h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item" data-aos="zoom-in">
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid gallery-img"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
