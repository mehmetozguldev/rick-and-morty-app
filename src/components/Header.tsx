import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const router = useRouter();
  const isActive = (path: string) => {
    if (path === "/") {
      return router.asPath === "/";
    } else {
      return router.asPath.startsWith(path);
    }
  };

  return (
    <Navbar>
      <Container fluid className="justify-content-start">
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
        <Nav activeKey={router.asPath} className="font-josefin text-uppercase">
          <Nav.Item>
            <Nav.Link
              style={{ color: isActive("/") ? "#42aa01" : undefined }}
              href="/"
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{
                color: isActive("/locations") ? "#42aa01" : undefined,
              }}
              href="/locations"
            >
              Locations
            </Nav.Link>
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
