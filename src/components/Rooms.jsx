import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Rooms.css"; // Ensure you include styles for the Rooms section

const rooms = [
  {
    id: 1,
    name: "Spacious Serenity Suite",
    img: "/Images/OurRoom_1.jpg",
    description:
      "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
    price: "Starting from Rs. 1500/night",
  },
  {
    id: 2,
    name: "Cozy Haven Room",
    img: "/Images/OurRoom_2.jpg",
    description:
      "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
    price: "Starting from Rs. 1000/night",
  },
  {
    id: 3,
    name: "Single Room",
    img: "/Images/OurRoom_3.jpg",
    description:
      "Experience luxury in our Single Room, where comfort meets elegance.",
    price: "Starting from Rs. 800/night",
  },
];

const Rooms = () => {
  return (
    <section id="rooms" className="rooms-section py-5 bg-light">
      <Container>
        <h4 className="text-center mb-5 rooms-title" data-aos="fade-up">
          OUR ROOMS
        </h4>
        <h2 className="text-center">
          The Most Memorable Rest Time Starts Here.
        </h2>
        <Row>
          {rooms.map((room) => (
            <Col md={4} key={room.id} data-aos="flip-left">
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  src={room.img}
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title className="card-title">{room.name}</Card.Title>
                  <Card.Text className="card-text">
                    {room.description}
                  </Card.Text>
                  <Card.Text className="card-price">
                    Price: {room.price}
                  </Card.Text>
                  <Button
                    variant="primary"
                    href={`https://wa.me/919007062180?text=${encodeURIComponent(
                      `Hello! I am interested in booking the ${room.name}. Here are the details:  
                      - Room: ${room.name}
                      - Price: ${room.price}
                      - Description: ${room.description}
                      Please let me know the availability and any special offers. Looking forward to yourresponse. Thank you!`
                    )}`}
                  >
                    BOOK IT NOW
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Rooms;
