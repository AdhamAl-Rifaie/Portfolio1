import React from 'react'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope,faMessage } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimatedLine from './ScrollLine';
import Orb from './Orb';
import { TypeAnimation } from 'react-type-animation';
  



const Contact = () => {
  return (
     
 <section className='contact glass-effect pb-5'>
  <br />
  <ScrollAnimatedLine></ScrollAnimatedLine>
  <div className="container-fluid pb-5">
    <div className="row align-items-center justify-content-center g-4">
      {/* Left Form Section */}
      <div className="col-lg-5 col-md-6 col-12">
        <div className="leftForm d-flex flex-column align-items-center justify-content-center text-center">
          <TypeAnimation
            sequence={[
              'Contact Me Now.',
              2000,
            ]}
            wrapper="div"
            speed={50}
            style={{
              fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
              fontWeight: 'bold',
              lineHeight: '1.1',
              whiteSpace: 'pre-line',
              color: "white",
              marginBottom: '2rem'
            }}
            className="typing-text"
            repeat={Infinity}
          />
          <div className="orb-wrapper">
            <Orb
              hoverIntensity={1}
              rotateOnHover={true}
              hue={0}
              forceHoverState={true}
            />
          </div>
        </div>
      </div>
      
      {/* Form Section */}
      <div className="col-lg-6 col-md-6 col-12">
        <div className="formBox glass-effect p-4 p-md-5">
          <h1 className='text-center mb-4 mb-md-5'>Contact Me</h1>
          <form action="" className='mt-4'>
            {/* Name and Email Inputs with Floating Labels */}
            <div className="row g-3 mb-4">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="floating-input-container">
                  <input 
                    type="text" 
                    className='floating-input' 
                    id="name"
                    required
                  />
                  <label htmlFor="name" className="floating-label">
                    <FontAwesomeIcon icon={faUser} className="me-2" />
                    Name
                  </label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="floating-input-container">
                  <input 
                    type="email" 
                    className='floating-input' 
                    id="email"
                    required
                  />
                  <label htmlFor="email" className="floating-label">
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    Email
                  </label>
                </div>
              </div>
            </div>
            
            {/* Radio Button Boxes */}
            <div className="radio-container-responsive mb-4 d-flex justify-content-evenly">
              <div className="custom-radio-box ">
                <input 
                  type="radio" 
                  name='subject' 
                  id='front'
                  className="radio-input"
                />
                <label htmlFor="front" className="radio-label">Front-End</label>
              </div>
              <div className="custom-radio-box">
                <input 
                  type="radio" 
                  name='subject' 
                  id='back'
                  className="radio-input"
                />
                <label htmlFor="back" className="radio-label">Back-End</label>
              </div>
              <div className="custom-radio-box">
                <input 
                  type="radio" 
                  name='subject' 
                  id='full'
                  className="radio-input"
                />
                <label htmlFor="full" className="radio-label">Full-Stack</label>
              </div>
            </div>
            
            <div className="row g-3 mb-4">
              <div className="col-12">
                <div className="floating-input-container">
                  <input
                    type="text" 
                    className='floating-input' 
                    id="message"
                    required
                  />
                  <label htmlFor="message" className="floating-label">
                    <FontAwesomeIcon icon={faMessage} className="me-2" />
                    Message
                  </label>
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn button px-4 py-2">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


    
  )
}

export default Contact
