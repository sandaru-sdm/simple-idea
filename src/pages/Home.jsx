import React from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { services, portfolioItems, testimonials } from "../data/data";
import image8 from "../assets/image8.png";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-5">
        <Container>
          <Row className="align-items-center py-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">
                Bringing Your <span className="text-primary">Ideas</span> to Life
              </h1>
              <p className="lead mb-4">
                We are Simple Idea, a full-service graphic design studio
                dedicated to transforming your vision into powerful visual
                communication.
              </p>
              <div className="d-flex gap-3">
                <Button as={Link} to="/contact" variant="primary" size="lg">
                  Get Started
                </Button>
                <Button
                  as={Link}
                  to="/portfolio"
                  variant="outline-light"
                  size="lg"
                >
                  View Our Work
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="position-relative">
                <img
                  src={image8}
                  alt="Creative Design Process"
                  className="img-fluid rounded shadow-lg"
                />
                <div className="position-absolute top-0 start-100 translate-middle bg-primary rounded-circle p-3 d-none d-lg-block">
                  <i className="bi bi-lightbulb-fill text-white fs-4"></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Services */}
      <section className="py-5 bg-dark">
        <Container>
          <h2 className="text-center mb-5">Our Services</h2>
          <Row>
            {services.slice(0, 3).map((service) => (
              <Col key={service.id} md={4} className="mb-4">
                <Card className="h-100 bg-dark text-white border-primary">
                  <Card.Img
                    variant="top"
                    src={service.image}
                    alt={service.title}
                  />
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <i
                        className={`${service.icon} text-primary fs-4 me-2`}
                      ></i>
                      <Card.Title className="mb-0">
                        {service.title}
                      </Card.Title>
                    </div>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-0">
                    <Button
                      as={Link}
                      to="/services"
                      variant="outline-primary"
                    >
                      Learn More
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button as={Link} to="/services" variant="primary" size="lg">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      {/* Recent Projects */}
      <section className="py-5 bg-black">
        <Container>
          <h2 className="text-center mb-5">Recent Projects</h2>
          <Row>
            {portfolioItems.slice(0, 3).map((item) => (
              <Col key={item.id} md={4} className="mb-4">
                <Card className="bg-dark text-white border-0">
                  <div
                    className="portfolio-item position-relative overflow-hidden"
                    style={{ maxHeight: "600px" }}
                  >
                    <Card.Img
                      variant="top"
                      src={item.image}
                      alt={item.title}
                      className="img-fluid"
                      style={{ objectFit: "cover", height: "600px" }}
                    />
                    <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                      <div className="text-center p-3">
                        <h5>{item.title}</h5>
                        <p className="mb-0">{item.category}</p>
                        <Button
                          variant="light"
                          size="sm"
                          className="mt-2"
                        >
                          View Project
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button
              as={Link}
              to="/portfolio"
              variant="outline-light"
              size="lg"
            >
              View Full Portfolio
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-dark">
        <Container>
          <h2 className="text-center mb-5">What Our Clients Say</h2>
          <Carousel indicators={false} className="testimonial-carousel">
            {testimonials.map((testimonial) => (
              <Carousel.Item key={testimonial.id}>
                <div className="testimonial-item text-center p-4">
                  <i className="bi bi-quote display-3 text-primary opacity-25"></i>
                  <p className="lead mb-4">{testimonial.text}</p>
                  <p className="fw-bold mb-0">{testimonial.author}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-5 bg-primary">
        <Container className="text-center">
          <h2 className="mb-4">Ready to Bring Your Ideas to Life?</h2>
          <p className="lead mb-4">
            Let's collaborate to create designs that make an impact.
          </p>
          <Button as={Link} to="/contact" variant="light" size="lg">
            Contact Us Today
          </Button>
        </Container>
      </section>
    </>
  );
}

export default Home;