'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTiktok, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const headerClasses =
    pathname === '/'
      ? `header ${scrolled ? 'scrolled' : ''}`
      : `header scrolled`;

  return (
    <>
      <header className={headerClasses}>
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

          {/* Desktop nav */}
          <nav className="nav-links desktop-nav">
            <Link href="/about">About</Link>
            <Link href="/artists">Artists</Link>
            {/* <Link href="/events">Events</Link> */}
            <Link href="/apply">Apply</Link>
            <Link href="/contact">Contact</Link>

            <div className="socials">
              <a href="https://www.instagram.com/swamprecordsuf" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.youtube.com/@swamprecordsuf" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://www.tiktok.com/@swamprecordsuf" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a href="https://www.linkedin.com/company/swamprecordsuf/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </nav>

          {/* Hamburger button (mobile) */}
          <button
            className="hamburger-button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            &#9776;
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <button
          className="close-button"
          onClick={() => setDrawerOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>

        <Link href="/about" onClick={() => setDrawerOpen(false)}>About</Link>
        <Link href="/artists" onClick={() => setDrawerOpen(false)}>Artists</Link>
        {/* <Link href="/events" onClick={() => setDrawerOpen(false)}>Events</Link> */}
        <Link href="/apply" onClick={() => setDrawerOpen(false)}>Apply</Link>
        <Link href="/contact" onClick={() => setDrawerOpen(false)}>Contact</Link>

        <div className="socials">
          <a href="https://www.instagram.com/swamprecordsuf" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.youtube.com/@swamprecordsuf" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://www.tiktok.com/@swamprecordsuf" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://www.linkedin.com/company/swamprecordsuf/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </>
  );
}
