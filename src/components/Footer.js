import React from 'react'
import '../styles/Footer.scss'
import logo from "../assets/logo.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Tiktok } from "../assets/tiktok.svg";
import { ReactComponent as Email } from "../assets/email-footer.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-grid-column">
            <img src={logo} alt="" />
            <p>
              Ratepunk compares hotel room prices across the major online travel
              agencies. When you search for a room, Ratepunk extension scans the
              top booking sites and runs a price comparison, so you can be
              confident in knowing you're getting the best deal!
            </p>
            <p className="copyright">© 2021 Ratepunk. All Rights Reserved.</p>
          </div>
          <div className="footer-grid-column">
            <div className="list-item">
              <p className="list-item-title">Quick links</p>
              <a href="#">Price Comparison</a>
              <a href="#">Chrome Extension</a>
              <a href="#">How It Works</a>
              <a href="#">Ratepunk Blog</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          <div className="footer-grid-column">
            <div className="list-item">
              <p className="list-item-title">Contact</p>
              <div className="contact-email">
                <Email/>
                <a href="#">hi@ratepunk.com</a>
              </div>
            </div>
            <div className="list-item">
              <p className="list-item-title">Social</p>
              <div className="social-icons">
                <Instagram className="social-single-icon" />
                <Facebook className="social-single-icon" />
                <Linkedin className="social-single-icon" />
                <Twitter className="social-single-icon" />
                <Tiktok className='social-single-icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer