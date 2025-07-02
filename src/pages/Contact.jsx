import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <section className="py-5 bg-dark">
      <Container>
        <h2 className="display-5 text-center mb-5">Contact Us</h2>
        <p className="lead text-center mb-5">
          Ready to start your next project? Get in touch with us today!
        </p>

        <Row>
          <Col lg={6} className="mb-4 mb-lg-0">
            <Card className="bg-black text-white h-100 border-0">
              <Card.Body className="p-4">
                <h3 className="mb-4">Get In Touch</h3>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Your Name"
                          className="bg-dark text-white border-secondary"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Your Email"
                          className="bg-dark text-white border-secondary"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      className="bg-dark text-white border-secondary"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Your Message"
                      className="bg-dark text-white border-secondary"
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                  >
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="bg-black text-white h-100 border-0">
              <Card.Body className="p-4">
                <h3 className="mb-4">Contact Information</h3>
                <div className="contact-info">
                  <div className="d-flex mb-4">
                    <div className="icon-box me-3">
                      <i className="bi bi-geo-alt-fill text-primary fs-4"></i>
                    </div>
                    <div>
                      <h5>Our Location</h5>
                      <p>
                        Simple Idea, Colombo - Kandy Road, Kanda Kapapu
                        Junction.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mb-4">
                    <div className="icon-box me-3">
                      <i className="bi bi-envelope-fill text-primary fs-4"></i>
                    </div>
                    <div>
                      <h5>Email Us</h5>
                      <p>simpleidealk@gmail.com</p>
                    </div>
                  </div>
                  <div className="d-flex mb-4">
                    <div className="icon-box me-3">
                      <i className="bi bi-telephone-fill text-primary fs-4"></i>
                    </div>
                    <div>
                      <h5>Call Us</h5>
                      <p>+94 (71) 206-4592</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="icon-box me-3">
                      <i className="bi bi-clock-fill text-primary fs-4"></i>
                    </div>
                    <div>
                      <h5>Business Hours</h5>
                      <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
                <h5 className="mt-4 mb-3">Follow Us</h5>
                <div className="social-links">
                  <a href="#" className="btn btn-outline-primary me-2">
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;