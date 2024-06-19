import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-end mt-3 mt-md-0">
            <ul className="social-icons">
              <li>
                <a href="https://facebook.com">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <address className="text-center col-md-12">
              Jl.Menangeng , Kota Semarang, Jawa Tengah <br />
              087709230971 <br />
              info@dharmifarma.com
            </address>
          </div>
        </div>
        <div className="col-md-12 text-center">
          <span>&copy; 2024 Dharmi Farma. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
