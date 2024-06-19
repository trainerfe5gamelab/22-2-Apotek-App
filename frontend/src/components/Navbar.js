import React, { useEffect, useState } from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import dharmifarmaLogo from '../images/aooku.jpg'; // Replace with your actual logo file and correct path

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();

  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <BootstrapNavbar className={scrolled ? 'navbar scrolled' : 'navbar'} expand="lg">
      <BootstrapNavbar.Brand href="#home">
        <img
          src={dharmifarmaLogo}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="DHARMIFARMA Logo"
        />
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#obat">Medicines</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link onClick={() => navigate('/signin')}>Admin</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          {isLoggedIn ? (
            <div className="user-icon bg-color-white" onClick={() => navigate('/MyProfil')}>
              <FaUserCircle size={24} />
            </div>
          ) : (
            <Nav.Link onClick={() => navigate('/signin')}>
              Login
            </Nav.Link>
          )}
          {isLoggedIn && (
            <Nav.Link onClick={handleLogout}>
              Logout
            </Nav.Link>
          )}
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
