'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faYoutube, 
  faTiktok, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';

export default function Navigation() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo-link">
          <Image
            src="/circle-logo-white.png"
            alt="Swamp Records Logo"
            width={100}
            height={100}
            className="logo"
            style={{ objectFit: 'contain' }}
          />
        </a>

        <nav className="nav-links">
          <a href="/about">About</a>
          <a href="/artists">Artists</a>
          {/* <a href="/events">Events</a> */}
          <a href="/apply">Apply</a>
          <a href="/contact">Contact</a>

          <div className="socials">
            <a 
              href="https://www.instagram.com/hpphotodesign/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a 
              href="https://www.instagram.com/hpphotodesign/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a 
              href="https://www.instagram.com/hpphotodesign/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a 
              href="https://www.instagram.com/hpphotodesign/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
} 