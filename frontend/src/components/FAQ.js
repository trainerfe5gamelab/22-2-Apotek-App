import React from 'react';
import faq from '../images/questions.png';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import './FAQ.css';

const FAQ = () => {
  return (
    <Container id='faq'>
      <Row>
        <Col xs={12} md={6} className="faq-image">
          <img src={faq} alt="FAQ" className="img-fluid rounded" /> 
        </Col>
        <Col xs={12} md={6} className="faq-accordion">
          <Accordion className="accordion">
            <div className="title mb-3"> 
              <h3 className="fw-bold color-secondary">What the FaQ ?</h3>
            </div>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Apakah pelayanan apotek ini 24 jam?</Accordion.Header>
              <Accordion.Body>
                Pelayan apotik darmi open 24 jam
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Apakah Apotik ini Buka toko Offline?</Accordion.Header>
              <Accordion.Body>
                Buka ada toko offline apotik nya
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Apakah Obat Disini Sudah BPOM?</Accordion.Header>
              <Accordion.Body>
                Tentu Produk Obat disini Sudah BPOM
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Apakah suplemen tersedia disini?</Accordion.Header>
              <Accordion.Body>
                Ada disini tersedia obat dan vitamins
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Apakah ada konsultasi obat?</Accordion.Header>
              <Accordion.Body>
                Tentu disini bisa berkonsultasi
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
