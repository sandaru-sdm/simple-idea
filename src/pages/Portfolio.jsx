import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { portfolioItems } from "../data/data";

function Portfolio() {
    const [filter, setFilter] = useState("All");
    const [filteredItems, setFilteredItems] = useState(portfolioItems);

    // Modal State
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const portfolioCategories = ["All", "Branding", "Digital Printing", "Web Design", "Logo Design", "Leaflet Design", "Poster Design"];

    // Handlers for modal
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    useEffect(() => {
        if (filter === "All") {
            setFilteredItems(portfolioItems);
        } else {
            setFilteredItems(
                portfolioItems.filter((item) => item.category === filter)
            );
        }
    }, [filter]);

    return (
        <>
            <section className="py-5 bg-dark">
                <Container>
                    <h2 className="display-5 text-center mb-5 text-white">Our Portfolio</h2>
                    <p className="lead text-center mb-5 text-white-50">
                        Explore our recent projects and see how we've helped businesses
                        succeed through compelling design.
                    </p>

                    <div className="portfolio-filters text-center mb-5">
                        {portfolioCategories.map(category => (
                            <Button
                                key={category}
                                variant="outline-primary"
                                className={`me-2 mb-2 ${filter === category ? "active" : ""}`}
                                onClick={() => setFilter(category)}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>

                    {/* --- CHANGE: Added justify-content-center to center the cards --- */}
                    <Row className="g-4 justify-content-center">
                        {filteredItems.map((item) => (
                            <Col key={item.id} lg={4} md={6} className="mb-4">
                                <Card className="portfolio-card bg-dark text-white border-2 border-primary">
                                    <div
                                        className="portfolio-img-container position-relative overflow-hidden"
                                        style={{ height: "300px" }}
                                    >
                                        <Card.Img
                                            variant="top"
                                            src={item.image}
                                            alt={item.title}
                                            style={{
                                                height: "100%",
                                                width: "100%",
                                                objectFit: "cover",
                                                objectPosition: "center",
                                            }}
                                        />
                                        <div className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                                            <div className="overlay-content text-center p-3">
                                                <h4 className="mb-2">{item.title}</h4>
                                                <p className="mb-3">{item.category}</p>
                                                <Button variant="outline-light" size="sm" onClick={() => handleShowModal(item)}>
                                                    View Details
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <Card.Body className="bg-secondary">
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

            {/* --- CHANGE: Removed size="lg" to make the modal smaller (default size) --- */}
            {selectedItem && (
                <Modal show={showModal} onHide={handleCloseModal} centered data-bs-theme="dark">
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedItem.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card.Img
                            src={selectedItem.image}
                            alt={selectedItem.title}
                            className="img-fluid mb-4"
                        />
                        <h5 className="text-primary">{selectedItem.category}</h5>
                        <p className="lead">
                            This is a placeholder for a more detailed project description. You can discuss the client's requirements, the project's challenges, and the creative solutions you provided.
                        </p>
                        <p>
                            Highlighting key features, the technology stack (for web projects), and the positive outcomes or client feedback would be a great addition here.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-light" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
}

export default Portfolio;