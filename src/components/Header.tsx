import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar sticky="top" bg="dark">
      <Container fluid className="justify-content-start px-32">
        <Navbar.Brand>
          <Link href="/">
            <Image
              src="/img/logo.png"
              width="263"
              height="78"
              alt="Rick and Morty logo"
            />
          </Link>
        </Navbar.Brand>
        <Nav activeKey="/home" className="font-josefin text-uppercase">
          <Nav.Item>
            <Nav.Link href="/home" style={{  }}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/locations">Locations</Nav.Link>
          </Nav.Item>
        </Nav>
        <Button className="ms-auto">
          My Favourites
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
