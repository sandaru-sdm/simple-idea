// src/components/Portfolio.jsx

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal, Carousel } from "react-bootstrap";
import { portfolioItems } from "../data/data";

function Portfolio() {
    const [filter, setFilter] = useState("All");
    const [filteredItems, setFilteredItems] = useState(portfolioItems);

    // Modal State
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    // Helper to generate additional placeholder images for modal
    const generateModalImages = (baseImage, count = 3) => {
        const images = [baseImage]; // Always include the primary image
        for (let i = 0; i < count; i++) {
            // Generate a slightly different placeholder for each additional image
            // Using a unique ID based on the current time and a random number
            images.push(`https://picsum.photos/id/${Math.floor(Math.random() * 1000) + 100}/${1200}/${800}`);
        }
        return images;
    };


    const portfolioCategories = [
        "All",
        ...new Set(portfolioItems.map((item) => item.category)),
    ];

    // Handlers for modal
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = (item) => {
        // When opening the modal, generate the full list of images for the carousel
        const fullImages = generateModalImages(item.image);
        setSelectedItem({ ...item, images: fullImages }); // Add the 'images' array to the selected item
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
            <section id="portfolio" className="py-5 bg-dark">
                <Container>
                    <h2 className="display-5 text-center mb-5 text-white">Our Portfolio</h2>
                    <p className="lead text-center mb-5 text-white-50">
                        Explore our recent projects and see how we've helped businesses
                        succeed through compelling design.
                    </p>

                    <div className="portfolio-filters text-center mb-5">
                        {portfolioCategories.map((category) => (
                            <Button
                                key={category}
                                variant="outline-primary"
                                className={`me-2 mb-2 ${
                                    filter === category ? "active" : ""
                                }`}
                                onClick={() => setFilter(category)}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>

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
                                            src={item.image} // Still using item.image for the thumbnail
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
                                                <Button
                                                    variant="outline-light"
                                                    size="sm"
                                                    onClick={() => handleShowModal(item)}
                                                >
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

            {/* Portfolio Item Modal */}
            {selectedItem && (
                <Modal show={showModal} onHide={handleCloseModal} centered size="xl" data-bs-theme="dark">
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedItem.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Bootstrap Carousel for multiple images */}
                        <Carousel interval={null} slide={false} data-bs-theme="dark">
                            {/* Now selectedItem.images will contain the base image + generated placeholders */}
                            {selectedItem.images.map((imgSrc, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={imgSrc}
                                        alt={`${selectedItem.title} Image ${index + 1}`}
                                        style={{ maxHeight: '600px', objectFit: 'contain' }}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>

                        <h5 className="text-primary mt-4">{selectedItem.category}</h5>
                        <p className="lead">{selectedItem.description}</p>
                        <p>
                            This section can be expanded with more specific details about the project's goals,
                            challenges faced, and the solutions implemented. Showcasing client testimonials
                            or quantifiable results (e.g., "Increased sales by X%") would enhance this description.
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