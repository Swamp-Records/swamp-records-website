'use client';

import Image from 'next/image';
import Link from 'next/link';
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
        <Link href="/" className="logo-link">
          <Image
            src="/circle-logo-white.png"
            alt="Swamp Records Logo"
            width={100}
            height={100}
            className="logo"
            style={{ objectFit: 'contain' }}
          />
        </Link>

        <nav className="nav-links">
          <Link href="/about">About</Link>
          <Link href="/artists">Artists</Link>
          {/* <Link href="/events">Events</Link> */}
          <Link href="/apply">Apply</Link>
          <Link href="/contact">Contact</Link>

          <div className="socials">
            <a 
              href="https://www.instagram.com/swamprecordsuf" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a 
              href="https://www.youtube.com/@swamprecordsuf" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a 
              href="https://www.tiktok.com/@swamprecordsuf" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a 
              href="https://www.linkedin.com/company/swamprecordsuf/" 
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
