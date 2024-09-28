import React from 'react';
import './Footer.css';
import logo from "../../../utils/img/logo-nobg.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <div className="footer-cta">
        <div className="footer-cta-items">
        <div className="footer-cta-left">
        <h1>Do you have a big event coming up</h1>
        <p>Contact us for preparation and publicity</p>
        <div className="footer-cta-btn">
            <p>Get Started</p>
        </div>
        </div>
        <div className="footer-cta-right">
            <img src={logo} alt="Footer Call to Action" />
        </div>
        </div>
      </div>
      {/* ---------------------------------------- */}
      <div className="content">
        <div className="links">
          <div className='footer-resources'>
            <h3>Useful Links</h3>
            <ul>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">Terms of Service</a></li>
              <li><a href="/">Privacy Policy</a></li>
            </ul>
          </div>
          <div className='footer-resources'>
            <h3>Careers</h3>
            <ul>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Press</a></li>
              <li><a href="/">Partnerships</a></li>
              <li><a href="/">Support</a></li>
            </ul>
          </div>
          <div className='footer-resources'>
            <h3>Resources</h3>
            <ul>
              <li><a href="/">Community</a></li>
              <li><a href="/">Social Media</a></li>
              <li><a href="/">Newsletter</a></li>
              <li><a href="/">Help Center</a></li>
            </ul>
          </div>
        <div className="subscribe">
          <h3>Join our community to receive updates</h3>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
          <div className="social-icons">
            <span className="link-socal"><a href="/">
            <FaFacebook />
            </a></span>
            <span className="link-socal"><a href="/">
            <FaInstagram />
            </a></span>
            <span className="link-socal"><a href="/">
            <FaLinkedin />
            </a></span>
            <span className="link-socal"><a href="/">
            <FaYoutube />
            </a></span>
          </div>
        </div>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2024 Africans in Doha. All rights reserved.</p>
      </div>
    </>
  );
}
