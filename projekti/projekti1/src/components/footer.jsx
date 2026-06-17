import React from 'react';

import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="footer-logo">EDI <span className="gradient-text">TECH</span></h2>
          <p>Programming | Development | Innovation</p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Navigation</h4>
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">About Us</a>
          </div>
          <div className="link-group">
            <h4>Connect</h4>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Email</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EDI TECH. All rights reserved.</p>
        <p className="made-by">Built with 100% JavaScript by Two Devs.</p>
      </div>
    </footer>
  );
};

export default Footer;