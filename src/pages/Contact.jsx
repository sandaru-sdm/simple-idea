import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import emailjs from '@emailjs/browser';

function Contact() {
    // State to hold form data, now including mobile
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        mobile: '',
        subject: '',
        message: ''
    });
    // State to manage submission status (success, error, messages)
    const [status, setStatus] = useState({ success: false, error: false, message: '' });

    const SERVICE_ID = 'service_5svoy96';
    const TEMPLATE_ID = 'template_vixyj2n';
    const PUBLIC_KEY = '_g6dDrIzfgRAlRrO2';
    // ----------------------------------------------------------------

    // Handles changes in form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handles the form submission
    const sendEmail = (e) => {
        e.preventDefault();

        // Reset status before a new submission
        setStatus({ success: false, error: false, message: '' });

        // Basic validation to ensure all fields are filled
        if (!formData.from_name || !formData.from_email || !formData.mobile || !formData.subject || !formData.message) {
            setStatus({ success: false, error: true, message: 'Please fill out all fields.' });
            return;
        }

        // Create the template params object that matches your new EmailJS template
        const templateParams = {
            name: formData.from_name,
            email: formData.from_email,
            mobile: formData.mobile,
            title: formData.subject,
            message: formData.message,
            time: new Date().toLocaleString() // Adds the current date and time
        };

        // Use emailjs.send to send the custom templateParams object
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((result) => {
                console.log('SUCCESS!', result.text);
                setStatus({ success: true, error: false, message: 'Your message has been sent successfully! We will contact you soon...' });
                // Reset form fields and state after successful submission
                e.target.reset();
                setFormData({ from_name: '', from_email: '', mobile: '', subject: '', message: '' });
            }, (error) => {
                console.log('FAILED...', error.text);
                setStatus({ success: false, error: true, message: `Failed to send message. Please try again. Error: ${error.text}` });
            });
    };

    return (
        <section className="py-5 bg-dark" data-bs-theme="dark">
            <Container>
                <h2 className="display-5 text-center mb-5 text-white">Contact Us</h2>
                <p className="lead text-center mb-5 text-white-50">
                    Ready to start your next project? Get in touch with us today!
                </p>

                <Row>
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <Card className="bg-black text-white h-100 border-0">
                            <Card.Body className="p-4">
                                <h3 className="mb-4">Get In Touch</h3>
                                <Form onSubmit={sendEmail}>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="from_name"
                                                    placeholder="Your Name"
                                                    className="bg-dark text-white border-secondary"
                                                    value={formData.from_name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="from_email"
                                                    placeholder="Your Email"
                                                    className="bg-dark text-white border-secondary"
                                                    value={formData.from_email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Mobile Number</Form.Label>
                                                <Form.Control
                                                    type="tel"
                                                    name="mobile"
                                                    placeholder="Your Mobile No."
                                                    className="bg-dark text-white border-secondary"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Subject</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Subject"
                                                    className="bg-dark text-white border-secondary"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            name="message"
                                            rows={4}
                                            placeholder="Your Message"
                                            className="bg-dark text-white border-secondary"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                    {status.message && (
                                        <Alert variant={status.success ? 'success' : 'danger'} className="mt-3">
                                            {status.message}
                                        </Alert>
                                    )}
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="w-100 mt-3"
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
                                    <a href="#!" className="btn btn-outline-primary me-2">
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
