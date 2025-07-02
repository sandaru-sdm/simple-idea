import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { services } from "../data/data";

function Services() {
  return (
    <section className="py-5 bg-dark">
      <Container>
        <h2 className="display-5 text-center mb-5">Our Services</h2>
        <p className="lead text-center mb-5">
          We offer a comprehensive range of graphic design services to
          help your business stand out.
        </p>

        <Row>
          {services.map((service) => (
            <Col key={service.id} lg={6} className="mb-5">
              <Card className="bg-dark text-white border-0 service-card">
                <Row className="g-0">
                  <Col
                    md={6}
                    className="position-relative"
                    style={{ height: "300px" }}
                  >
                    <Card.Img
                      src={service.image}
                      alt={service.title}
                      className="img-fluid rounded-start"
                      style={{
                        height: "300px",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </Col>
                  <Col md={6}>
                    <Card.Body className="d-flex flex-column h-100">
                      <div className="mb-3">
                        <i
                          className={`${service.icon} text-primary fs-1 mb-3`}
                        ></i>
                        <Card.Title className="fs-3">
                          {service.title}
                        </Card.Title>
                      </div>
                      <Card.Text className="mb-4">
                        {service.description}
                      </Card.Text>
                      <Button
                        variant="outline-primary"
                        className="mt-auto align-self-start"
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="process-section mt-5 pt-5">
          <h3 className="text-center mb-5">Our Design Process</h3>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="process-step text-center">
                <div className="process-icon mb-3">
                  <span
                    className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center fs-4"
                    style={{ width: "80px", height: "80px" }}
                  >
                    1
                  </span>
                </div>
                <h4>Discovery</h4>
                <p>
                  We start by understanding your brand, goals, and target
                  audience to create a strategic foundation.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="process-step text-center">
                <div className="process-icon mb-3">
                  <span
                    className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center fs-4"
                    style={{ width: "80px", height: "80px" }}
                  >
                    2
                  </span>
                </div>
                <h4>Concept</h4>
                <p>
                  We develop creative concepts that align with your brand
                  identity and project objectives.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="process-step text-center">
                <div className="process-icon mb-3">
                  <span
                    className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center fs-4"
                    style={{ width: "80px", height: "80px" }}
                  >
                    3
                  </span>
                </div>
                <h4>Design</h4>
                <p>
                  Our designers bring the concepts to life with attention
                  to detail and artistic excellence.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="process-step text-center">
                <div className="process-icon mb-3">
                  <span
                    className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center fs-4"
                    style={{ width: "80px", height: "80px" }}
                  >
                    4
                  </span>
                </div>
                <h4>Delivery</h4>
                <p>
                  We deliver the final designs and provide any necessary
                  support for implementation.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <div className="cta-box bg-primary p-5 rounded text-center mt-5">
          <h3 className="mb-3">Ready to Start Your Project?</h3>
          <p className="lead mb-4">
            Contact us today to discuss how we can bring your ideas to
            life.
          </p>
          <Button as={Link} to="/contact" variant="light" size="lg">
            Get a Free Quote
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Services;