import React from "react";
import { Button, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <Container fluid className="hero-wrapper">
      <Container className="hero-container">
        <h1 className="font-josefin">Rick and Morty</h1>
        <hr />
        <p className="font-josefin">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ligula
          lorem, dictum pretium condimentum id, fringilla feugiat augue. Cras ac
          enim rhoncus lacus hendrerit efficitur. Sed ac leo consequat, rhoncus
          velit sit amet, semper mi. Cras feugiat mollis ullamcorper.{" "}
        </p>
        <Button>Get Schwifty</Button>
      </Container>
    </Container>
  );
};

export default Hero;
