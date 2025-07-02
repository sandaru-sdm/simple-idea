import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white py-5">
      <Container>
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <h4 className="mb-4">Simple Idea</h4>
            <p>
              We are a full-service graphic design firm dedicated to bringing
              your ideas to life through creative and effective visual
              solutions.
            </p>
            <div className="social-icons mt-4">
              <a href="#" className="me-3 text-white">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="me-3 text-white">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="me-3 text-white">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="me-3 text-white">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-decoration-none text-white-50">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-decoration-none text-white-50">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-decoration-none text-white-50">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/portfolio" className="text-decoration-none text-white-50">
                  Portfolio
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-decoration-none text-white-50">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={4} md={6}>
            <h5 className="mb-4">Contact Info</h5>
            <ul className="list-unstyled contact-info">
              <li className="mb-3 d-flex">
                <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                <span>Simple Idea, Colombo - Kandy Road, Kanda Kapapu Junction</span>
              </li>
              <li className="mb-3 d-flex">
                <i className="bi bi-envelope-fill text-primary me-2"></i>
                <span>simpleidealk@gmail.com</span>
              </li>
              <li className="mb-3 d-flex">
                <i className="bi bi-telephone-fill text-primary me-2"></i>
                <span>+94 (71) 206-4592</span>
              </li>
              <li className="d-flex">
                <i className="bi bi-clock-fill text-primary me-2"></i>
                <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4 bg-secondary" />
        <Row>
          <Col>
            <p className="text-center mb-0">
              &copy; {new Date().getFullYear()} Simple Idea. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;