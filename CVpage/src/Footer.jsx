import React from 'react';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const now = new Date();
  
  return (
    <footer className='footer-section'>
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-logo">
            <img src="media/logo.png" alt="Adham Al-Rifaie Logo" className="logo-img"/>
            <h5 className="brand-name">Adham Al-Rifaie</h5>
          </div>

          {/* Copyright Section */}
          <div className="footer-copyright">
            <p>©{format(now, 'yyyy')} All rights reserved</p>
            <p className="sub-text">Full-Stack Developer</p>
          </div>

          {/* Social Media Section */}
          <div className="footer-social">
            <p className="social-title">Follow Me</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/ad.ham.908579" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/adham.elrefa3yy/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://wa.me/+201011694656" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="footer-contact">
            <p className="contact-title">Get In Touch</p>
            <p className="contact-info">adham.refaa3y@gmail.com</p>
            <p className="contact-info">+20 1011694656</p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>Made with ❤️ in Egypt</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer