import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="min-vh-content">
      <section className="page-section contact-section">
        <Container>
          <h1 className="section-title">Contact Us</h1>

          <Row className="align-items-stretch">
            <Col md={8} className="mb-4">
              <Card className="contact-main-card">
                <Card.Body className="p-4">
                  <Card.Title className="h3 mb-4">Send us a Message</Card.Title>

                  {showAlert && (
                    <Alert variant="success" dismissible onClose={() => setShowAlert(false)}>
                      Thank you for your message! We'll get back to you soon.
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSubject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        placeholder="Your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" size="lg">
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="mb-4 contact-side-card">
                <Card.Body>
                  <Card.Title className="h5 mb-3">Contact Information</Card.Title>
                  <Card.Text>
                    <strong>Email:</strong><br />
                    <a href="mailto:chhetrimessi1011@gmail.com">Thunderdragonfootballclub@gmail.com</a>
                  </Card.Text>
                  <Card.Text>
                    <strong>Phone:</strong><br />
                    <a href="tel:+1234567890">0452 168 663</a>
                  </Card.Text>
                  <Card.Text>
                    <strong>Address:</strong><br />
                    Melbourne, Victoria<br />
                    Australia
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="contact-side-card">
                <Card.Body>
                  <Card.Title className="h5 mb-3">Follow Us</Card.Title>
                  <Card.Text>
                    Stay connected with Thunder Dragon FC on social media:
                  </Card.Text>
                  <div className="d-flex flex-column">
                    <a href="https://www.facebook.com/Thunderdragonfc/" className="mb-2">Facebook</a>
                    <a href="https://www.instagram.com/thunderdragonfc/" className="mb-2">Instagram</a>
                  </div>
                </Card.Body>
              </Card>

              <Card className="mt-4 contact-side-card">
                <Card.Body>
                  <Card.Title className="h5 mb-3">Training Schedule</Card.Title>
                  <Card.Text>
                    <strong>Practice Days:</strong><br />
                    Wednesday & Saturday<br />
                    5:00 PM - 7:00 PM
                  </Card.Text>
                  <Card.Text>
                    <strong>Location:</strong><br />
                    217 Camp Rd, Broadmeadows VIC 3047<br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Contact;
