import React, { useEffect, useState } from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle} from 'react-icons/fa';

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BootstrapNavbar className={scrolled ? 'navbar scrolled' : 'navbar'} expand="lg">
      <BootstrapNavbar.Brand href="#home">APOTEK</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#medicines">Medicines</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link onClick={() => navigate('/signin')}>
            Login
          </Nav.Link>
          <div className="user-icon bg-color-white" onClick={() => navigate('/MyProfil')}>
            <FaUserCircle size={24} />
          </div>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
