import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faMapMarkerAlt, 
  faUniversity 
} from '@fortawesome/free-solid-svg-icons';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <h3>Email</h3>
                <p>swamprecords@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div>
                <h3>Location</h3>
                <p>Gainesville, Florida</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faUniversity} />
              </div>
              <div>
                <h3>University of Florida</h3>
                <p>Student-run organization</p>
              </div>
            </div>
          </div>
          
          <div className="contact-cta">
            <h3>Interested in working with us?</h3>
            <p>Whether you're an artist looking for support or a student wanting to get involved, we'd love to hear from you.</p>
            <a href="#apply" className="cta-button">Apply Now</a>
          </div>
        </div>
      </div>
    </section>
  );
} 