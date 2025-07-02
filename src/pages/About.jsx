import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { teamMembers } from "../data/data";
import image9 from "../assets/image9.png";

function About() {
  return (
    <section className="py-5 bg-dark">
      <Container>
        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="display-5 mb-4">About Simple Idea</h2>
            <p className="lead">
              We are a creative graphic design studio passionate about
              transforming ideas into visual experiences that matter.
            </p>
            <p>
              Founded in 2016, Simple Idea has grown from a small design
              studio to a comprehensive graphic design firm serving
              clients across multiple industries. Our approach combines
              creativity with strategic thinking to deliver designs that
              not only look great but also achieve business objectives.
            </p>
            <p>
              With our team of experienced designers, we offer a full
              range of graphic design services, from branding and identity
              design to digital printing solutions.
            </p>
            <div className="d-flex gap-3 mt-4">
              <Button as={Link} to="/services" variant="primary">
                Our Services
              </Button>
              <Button
                as={Link}
                to="/contact"
                variant="outline-light"
              >
                Get in Touch
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <img
              src={image9}
              alt="Simple Idea Studio"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        <h3 className="text-center mb-5 mt-5">Our Values</h3>
        <Row className="text-center">
          <Col md={4} className="mb-4">
            <div className="value-item p-4 bg-black rounded">
              <div className="icon-box mb-3">
                <i className="bi bi-lightbulb text-primary display-4"></i>
              </div>
              <h4>Creativity</h4>
              <p>
                We embrace creativity in every aspect of our work, pushing
                boundaries to deliver unique design solutions.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="value-item p-4 bg-black rounded">
              <div className="icon-box mb-3">
                <i className="bi bi-people text-primary display-4"></i>
              </div>
              <h4>Collaboration</h4>
              <p>
                We believe in working closely with our clients, building
                partnerships that lead to exceptional results.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="value-item p-4 bg-black rounded">
              <div className="icon-box mb-3">
                <i className="bi bi-arrow-up-right-circle text-primary display-4"></i>
              </div>
              <h4>Excellence</h4>
              <p>
                We are committed to excellence in every project,
                maintaining the highest standards in all we do.
              </p>
            </div>
          </Col>
        </Row>

        <h3 className="text-center mb-5 mt-5">Our Team</h3>
        <Row>
          {teamMembers.map((member) => (
            <Col key={member.id} lg={3} md={6} className="mb-4">
              <Card className="team-card bg-dark text-white border-0">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={member.image}
                    alt={member.name}
                    className="img-fluid"
                    style={{
                      height: "300px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <Card.Body className="text-center">
                  <h5 className="fw-bold mb-2">{member.name}</h5>
                  <div className="text-primary mb-3">{member.role}</div>
                  <Card.Text>{member.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default About;