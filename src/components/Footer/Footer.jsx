
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">About Us</h5>
            <p>
              We bring you the latest and most stylish dresses for every occasion. 
              Quality, comfort, and elegance – all in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/product" className="text-light text-decoration-none">Shop</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="/login" className="text-light text-decoration-none">Contact</Link></li>
              <li><Link to="/cart" className="text-light text-decoration-none">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Connect With Us</h5>
            <p><FaEnvelope className="me-2" /> <a href="mailto:support@dressstore.com" className="text-light text-decoration-none">support@dressstore.com</a></p>
            <p><FaPhone className="me-2" /> <a href="tel:+1234567890" className="text-light text-decoration-none">+1 234 567 890</a></p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-light fs-5"><FaFacebookF /></a>
              <a href="#" className="text-light fs-5"><FaInstagram /></a>
              <a href="#" className="text-light fs-5"><FaTwitter /></a>
            </div>
          </div>

        </div>

        <hr className="border-top border-light" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} DressStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

