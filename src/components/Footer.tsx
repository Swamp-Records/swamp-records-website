import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faYoutube, 
  faTiktok, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Swamp Records</h3>
            <p>Empowering the Florida music scene since 2013</p>
            <p>University of Florida • Gainesville, FL</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#ourartists">Artists</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#apply">Apply</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Marketing & PR</li>
              <li>Booking & Events</li>
              <li>Artist Development</li>
              <li>Music Industry Experience</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-socials">
              <a href="https://www.instagram.com/hpphotodesign/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.instagram.com/hpphotodesign/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://www.instagram.com/hpphotodesign/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a href="https://www.instagram.com/hpphotodesign/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <p className="footer-email">swamprecords@gmail.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Swamp Records. All rights reserved.</p>
          <p>A student-run organization at the University of Florida</p>
        </div>
      </div>
    </footer>
  );
} 