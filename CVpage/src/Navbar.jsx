import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare,faFile } from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  
  faLinkedin,
  faGithub,
  
} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <div className="container  pt-3 test ">
      <nav className="navbar navbar-expand-lg px-3 ">
        <div className="container-fluid">
          {/* Left side - Brand and Button */}
          <div className="d-flex align-items-center leftBrand glass-effect justify-content-between ps-4 pe-2 py-1" data-aos="fade-down" data-aos-duration="1000">
            <a className="navbar-brand me-3" href="#">Adham.</a>
             <a href="https://wa.me/+201011694656" target="_blank" rel="noopener noreferrer" >
              <button className="btn px-3 btn-sm">
                Let's Chat <FontAwesomeIcon icon={faUpRightFromSquare} className="ms-1" />
              </button>
             </a>
          </div>
          
          {/* Right side - Toggler button */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* Collapsible content */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto " data-aos="fade-down" data-aos-duration="1000">
              <li className="nav-item">
                <a target='_blank' className="nav-link me-3 " aria-current="page" href="https://www.linkedin.com/in/adham-elrefai-32a87b217/"><FontAwesomeIcon icon={faLinkedin} className="me-1" /> LinkedIn</a>
              </li>
              <li className="nav-item">
                <a target='_blank' className="nav-link me-3" href="https://github.com/AdhamAl-Rifaie"><FontAwesomeIcon icon={faGithub} className="me-1" />GitHub</a>
              </li>
              <li className="nav-item">
                <a target='_blank' className="nav-link me-3" href="https://www.facebook.com/ad.ham.908579"><FontAwesomeIcon icon={faFacebook} className="me-1" />Facebook</a>
              </li>
               <li className="nav-item">
                <a target='_blank' className="nav-link me-3" href="#"><FontAwesomeIcon icon={faFile} className="me-1"/>CV</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
