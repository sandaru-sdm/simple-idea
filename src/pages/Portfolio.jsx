import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { portfolioItems } from "../data/data";

function Portfolio() {
  return (
    <section className="py-5 bg-dark">
      <Container>
        <h2 className="display-5 text-center mb-5">Our Portfolio</h2>
        <p className="lead text-center mb-5">
          Explore our recent projects and see how we've helped businesses
          succeed through compelling design.
        </p>

        <div className="portfolio-filters text-center mb-5">
          <Button variant="outline-primary" className="me-2 mb-2 active">
            All
          </Button>
          <Button variant="outline-primary" className="me-2 mb-2">
            Branding
          </Button>
          <Button variant="outline-primary" className="me-2 mb-2">
            Print Design
          </Button>
          <Button variant="outline-primary" className="me-2 mb-2">
            Web Design
          </Button>
        </div>

        <Row className="g-4">
          {portfolioItems.map((item) => (
            <Col key={item.id} lg={4} md={6} className="mb-4">
              <Card className="portfolio-card bg-dark text-white border-0">
                <div
                  className="portfolio-img-container position-relative overflow-hidden"
                  style={{ height: "600px" }}
                >
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.title}
                    style={{
                      height: "600px",
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <div className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="overlay-content text-center p-3">
                      <h4 className="mb-2">{item.title}</h4>
                      <p className="mb-3">{item.category}</p>
                      <Button variant="outline-light" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {item.category}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;