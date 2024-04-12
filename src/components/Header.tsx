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
        <Nav activeKey="/" className="font-josefin text-uppercase">
          <Nav.Item>
            <Nav.Link href="/" style={{}}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/locations">Locations</Nav.Link>
          </Nav.Item>
        </Nav>
        <Link href="/my-favourites" className="ms-auto">
          <Button>My Favourites</Button>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
