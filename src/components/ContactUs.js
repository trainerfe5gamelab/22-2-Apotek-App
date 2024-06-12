import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'; 
import { MdAccessTime } from 'react-icons/md';
import './ContactUs.css';

const ContactUs = () => {
  const [form, setForm] = useState({
    formName: '',
    formEmail: '',
    formMessage: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Name: ${form.formName}\nEmail: ${form.formEmail}\nMessage: ${form.formMessage}`;
    const whatsappURL = `https://wa.me/+6281390937612?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <section className='contact' id="contact">
      <Container className="contact-us-container mt-5">
        <Row className="text-center">
          <Col>
            <h1 className="contact-us-header">Contact Us</h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h3 style={{ paddingRight: '15%' }}>Consult with a Pharmacist</h3>
            <div className="social-media-icons" style={{ paddingRight: '50%' }}>
              <div className="d-block mb-3" style={{ paddingLeft: '24%' }}>
                <FaWhatsapp size={32} /> <a href="https://wa.me/+6287709230971">+6287709230971</a>
              </div>
              <div className="d-block">
                <FaInstagram size={32} /> Dharmi
              </div>
            </div>
            <br />
            <h3 style={{ paddingRight: '60%' }}>Open:</h3>
            <div className="open-hours" style={{ paddingLeft: '14%' }}>
              <p><MdAccessTime size={24} /><b> Buka 24 Jam Setiap Hari.</b></p>
            </div>
          </Col>
          <Col>
            <h2>Send us a message</h2>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group controlId="formName" className="mb-3">
                <Form.Control 
                  type="text" 
                  placeholder="Enter your name" 
                  value={form.formName}
                  onChange={handleInputChange}
                  required 
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control 
                  type="email" 
                  placeholder="Enter email" 
                  value={form.formEmail}
                  onChange={handleInputChange}
                  required 
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  placeholder="Enter your message" 
                  value={form.formMessage}
                  onChange={handleInputChange}
                  required 
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
