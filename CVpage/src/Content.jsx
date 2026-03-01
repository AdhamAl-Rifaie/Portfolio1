import React, { useState } from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faDatabase, faJ } from '@fortawesome/free-solid-svg-icons';
import { 
  faHtml5, 
  faPhp,
  faPython,
  faCss3Alt,      // Corrected from faCss
  faBootstrap,
  faReact,
  faNodeJs,       // Corrected from faNode
  faJs            // Added JavaScript icon
} from '@fortawesome/free-brands-svg-icons';
import Navbar from './Navbar'
import Contact from './Contact';
import ScrollProgressLine from './ScrollLine';
import { TypeAnimation } from 'react-type-animation';


<TypeAnimation
  sequence={[
    'Hello World!',
    1000,
    'This is a typing effect',
    1000,
    'React is awesome!',
    1000
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
/>
const Content = () => {
  const [modalData, setModalData] = useState({
    title: '',
    description: '',
    details: '',
    link: '',
    type: '',
    images: [] // Array for image names
  });

  const [showModal, setShowModal] = useState(false);

  // Function to handle modal opening
  const openModal = (data) => {
    setModalData(data);
    setShowModal(true);
    // Bootstrap 5 modal trigger
    const modal = new window.bootstrap.Modal(document.getElementById('universalModal'));
    modal.show();
  };

  // Project and certificate data
  const projectsData = [
    {
      title: 'EDT-Chatbot',
      description: 'Web application that allows users to interact with a chatbot for emotional purposes, Powered by AI and Computer Vision.',
      details: "This innovative web application leverages cutting-edge Artificial Intelligence and Computer Vision and intelligent chatbot for emotional support built with vanilla JavaScript, HTML, and CSS. Integrates Artificial Intelligence (Llama-3) and Computer Vision (Hough Transform) for advanced natural language processing, emotion detection, and personalized responses through a real-time chat interface.",
      link: 'https://github.com/AdhamAl-Rifaie/EDT-Chatbot',
      type: 'project',
      images: ['project.jpg','project1.png', 'project2.png', 'project3.png', 'project4.png','project5.png']
    },
    {
      title: 'Egypt Trip Booking',
      description: 'Web application that allows users book trips to Egypt fully Customizable for their desired trip.',
      details: 'A comprehensive travel booking platform built with React and Express.js. Features include trip customization, payment integration, itinerary planning, and real-time booking management.',
      link: 'https://github.com/AdhamAl-Rifaie/Fly-To-Egypt',
      type: 'project',
      images: ['1.png', '2.png', '3.png', '4.png','5.png','6.png','7.png']
    }
  ];

  const certificatesData = [
    {
      title: 'Marketing Certificates',
      description: 'Marketing Certificates from Google and Egyptian Ministry for Communication and Technology',
      details: 'Completed Marketing Courses to be more aware of how sales work promote myself better.',
      link: 'https://certificate-link.com',
      type: 'certificate',
      images: ['CF2.jpg','CF3.jpg']
    },
    {
      title: 'Full Stack Web Development',
      description: 'Complete full-stack development certification including frontend and backend technologies.',
      details: 'Comprehensive program covering HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and deployment strategies.',
      link: 'https://certificate-link.com',
      type: 'certificate',
      images: ['FSCertificate.jpg',]
    }
  ];

  return (
    <main>
      {/* HEROSECTION */}
      <section className='heroSection glass-effect '>
        <Navbar />
        <div className="container d-flex justify-content-center align-items-center h-75">
          <div className="row justify-content-evenly w-100 align-items-center">
            <div className="leftText col-lg-5 col-md-6 col-12 mb-4 mb-md-0" data-aos="fade-right" data-aos-duration="1900">
              <span className='d-block mb-3 fs-5 '>Hi, I'm</span>
              <TypeAnimation
                  sequence={[
                    'Adham\nAl-Rifaie...',
                    2000,
                    'Ai Student...,',
                    2000,
                    'Full-Stack Developer.',
                    2000
                  ]}
                  wrapper="div"
                  speed={50}
                  style={{
                    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                    fontWeight: 'bold',
                    lineHeight: '1.1',
                    whiteSpace: 'pre-line'
                  }}
                  className="display-3 display-md-2 display-lg-1 fw-bold mb-4 mb-lg-5"
                  repeat={Infinity}
                />
              
              <button className="btn btn-sm button py-3 px-4">
                Schedule a Call
              </button>
            </div>

            <div className="rightText col-lg-5 col-md-6 col-12" data-aos="fade-left" data-aos-duration="1900">
              <p className='lead mb-4 fs-6 fs-md-5 lh-base'>
              Meet Adham, a 20-year-old <b>AI student at Delta University</b> who teaches machines how to think (surprisingly tricky!). As a full-stack developer, I build custom websites that practically know your coffee order. Need a sleek site or web app? I've got you covered – no 2003 vibes, promise!
              </p>
              <p className='mb-4 fs-6 fs-md-5 lh-base'>
                When not wrestling CSS at 3 AM, I create AI projects almost as smart as me on good days. From chatbots that get you to pizza-spotting computer vision, I bring AI to life. Need a website or AI solution? I'm your guy – just don't ask about printers, that's beyond all intelligence!
              </p>
              <div className="Technologies d-flex justify-content-between">
                <FontAwesomeIcon  icon={faHtml5} className="ms-1 icon" />
                <FontAwesomeIcon  icon={faCss3Alt} className="ms-1 icon" />
                <FontAwesomeIcon  icon={faJs} className="ms-1 icon" />
                <FontAwesomeIcon  icon={faBootstrap} className="ms-1 icon" />
                <FontAwesomeIcon  icon={faReact} className="ms-1 icon" />
                <FontAwesomeIcon  icon={faDatabase} className="ms-1 icon" />
                <FontAwesomeIcon  icon={faNodeJs} className="ms-1 icon" />
                <FontAwesomeIcon  icon={faPhp} className="ms-1 icon" />
                <FontAwesomeIcon  icon={faPython} className="ms-1 icon" />

              </div>
              
            </div>
          </div>  
        </div>
      </section>

      {/* AboutMe Section */}
      <section className='aboutMeSection b-5 '>
        <div className="aboutMe glass-effect">
          <div className="container px-5 mt-4">
            <div className="row justify-content-evenly w-100 align-items-center pb-5 projectsBox">
              <div className="projects col-lg-6" data-aos="fade-right" data-aos-duration="1900">
                <h4 className='mt-3'>Projects</h4>
                <span className=''>Projects I have built</span>
                
                {/* Dynamic Projects */}
                {projectsData.map((project, index) => (
                  <div 
                    key={index}
                    className="project glass-effect p-3 col-12  mt-4 d-flex justify-content-between align-items-center" 
                    onClick={() => openModal(project)}
                    style={{cursor: 'pointer'}}
                  >
                    <div className="textProject">
                      <span className='fs-5'>{project.title}</span> <br />
                      <p className='mt-2'>{project.description}</p>
                    </div>
                    <FontAwesomeIcon icon={faUpRightFromSquare} className="ms-1" />
                  </div>
                ))}
              </div>

              <div className="certificates col-lg-6 " data-aos="fade-left" data-aos-duration="1900">
                <h4 className='mt-3'>Certificates</h4>
                <span className=''>Don't judge.</span>
                
                {/* Dynamic Certificates */}
                {certificatesData.map((certificate, index) => (
                  <div 
                    key={index}
                    className="project glass-effect p-3 col-12  mt-4 d-flex justify-content-between align-items-center" 
                    onClick={() => openModal(certificate)}
                    style={{cursor: 'pointer'}}
                  >
                    <div className="textProject">
                      <span className='fs-5'>{certificate.title}</span> <br />
                      <p className='mt-2'>{certificate.description}</p>
                    </div>
                    <FontAwesomeIcon icon={faUpRightFromSquare} className="ms-1" />
                  </div>
                ))}
              </div>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* SINGLE UNIVERSAL MODAL WITH IMAGE GALLERY */}
      <div className="modal blurBG fade" id="universalModal" tabIndex="-1" aria-labelledby="universalModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content glass-effect">
            <div className="modal-header">
              <h5 className="modal-title" id="universalModalLabel">{modalData.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="lead">{modalData.description}</p>
              <hr />
              <p>{modalData.details}</p>
              
              {/* Image Gallery Section */}
              {modalData.images && modalData.images.length > 0 && (
                <div className="mt-4">
                  <h6 className="mb-3">Project Gallery</h6>
                  <div className="row g-3">
                    {modalData.images.map((image, index) => (
                      <div key={index} className="col-md-6 col-lg-4 h-100">
                        <div className="image-container">
                          <img 
                            src={`media/${image}`} 
                            alt={`${modalData.title} screenshot ${index + 1}`}
                            className="img-fluid rounded shadow-sm modal-image"
                            style={{
                              width: '100%',
                              height: '200px',
                              objectFit: 'cover',
                              cursor: 'pointer',
                              transition: 'transform 0.3s ease',
                              loading: 'lazy',
                            }}
                            onClick={(e) => {
                            if (e.target.style.transform === 'scale(2)') {
                              e.target.style.transform = 'scale(1)';
                              e.target.style.zIndex = 'auto';
                            } else {
                              e.target.style.transform = 'scale(2)';
                              e.target.style.zIndex = '999';
                            }
                          }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="button px-3 py-1" data-bs-dismiss="modal">Close</button>
              {modalData.link && (
                <a 
                  href={modalData.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button px-3 py-1"
                >
                  {modalData.type === 'project' ? 'View Project' : 'View Certificate'}
                  <FontAwesomeIcon icon={faUpRightFromSquare} className="ms-2" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Contact></Contact>
    </main>
  )
}

export default Content
