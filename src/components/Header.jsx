import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className={scrolled ? "py-2 shadow" : "py-3"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <span className="fw-bold fs-4 me-1">Simple</span>
          <span className="text-primary fw-bold fs-4">Idea</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" active={location.pathname === "/about"}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" active={location.pathname === "/services"}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio" active={location.pathname === "/portfolio"}>
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" active={location.pathname === "/contact"}>
              Contact
            </Nav.Link>
          </Nav>
          <Button
            as={Link}
            to="/contact"
            variant="primary"
            className="ms-lg-3"
            active={location.pathname === "/contact"}
          >
            Get Quote
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;