import React, { useState } from "react";
import axios from "axios";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Send data to backend using axios
      const response = await axios.post("/contact", formData);

      if (response.status === 201) {
        setSuccess("Your message has been sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      setError("Failed to send the message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section id="contact" className="contact section">
        <Container className="section-title text-center" data-aos="fade-up">
          <h2>Contact</h2>
        </Container>

        <Container data-aos="fade-up" data-aos-delay="100">
          <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
            <Row className="gy-5 text-center">
              <Col lg={6}>
                <div className="info-item">
                  <BsFillTelephoneFill size={30} />
                  <h3>Call Me</h3>
                  <p>+91 7709029461</p>
                </div>
              </Col>

              <Col lg={6}>
                <div className="info-item">
                  <BsFillEnvelopeFill size={30} />
                  <h3>Email Me</h3>
                  <p>omkaratwork0@gmail.com</p>
                </div>
              </Col>
            </Row>
          </div>

          <Form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="300">
            <Row className="gy-4">
              <Col md={6}>
                <Form.Control
                  type="text"
                  name="fullName"
                  placeholder="Your Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </Col>

              <Col md={6}>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Col>

              <Col md={12}>
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </Col>

              <Col md={12}>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={6}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </Col>

              <Col md={12} className="text-center">
                {loading && <div className="loading">Loading...</div>}
                {error && <div className="error-message">{error}</div>}
                {success && <div className="sent-message">{success}</div>}

                <Button type="submit" variant="primary" disabled={loading}>
                  Send Message
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
