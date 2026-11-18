'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Navigation.module.css';
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
    ? `${styles.header} ${scrolled ? styles.scrolled : ''}`
    : `${styles.header} ${styles.scrolled}`;

  return (
    <>
      <header className={headerClasses}>

        {/*Logo is still part of the header but not in headerConatiner - should hang below the navlinks*/}
        <Link href="/" className={styles.logoLink}>
            <Image
              src="/graphics/circle-logo-black.png"
              alt="Swamp Records Logo"
              width={100}
              height={100}
              className={styles.logo}
              style={{ objectFit: 'contain' }}
            />
        </Link>

        {/*black strip of navbar*/}
        <div className={styles.headerContainer}>

          {/* Desktop nav */}
          <nav className={`${styles.navLinks} ${styles.desktopNav}`}>
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
            <Link href="/artists">Artists</Link>
            <Link href="/campaigns">Campaigns</Link>
            <Link href="/apply">Apply</Link>
            <Link href="/contact">Contact</Link>


            <div className={styles.socials}>
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
            className={styles.hamburgerButton}
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            &#9776;
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${drawerOpen ? styles.open : ''}`}>
        <button
          className={styles.closeButton}
          onClick={() => setDrawerOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>

        <Link href="/about" onClick={() => setDrawerOpen(false)}>About</Link>
        <Link href="/events" onClick={() => setDrawerOpen(false)}>Events</Link>
        <Link href="/artists" onClick={() => setDrawerOpen(false)}>Artists</Link>
        <Link href="/campaigns" onClick={() => setDrawerOpen(false)}>Campaigns</Link>
        <Link href="/apply" onClick={() => setDrawerOpen(false)}>Apply</Link>
        <Link href="/contact" onClick={() => setDrawerOpen(false)}>Contact</Link>

        <div className={styles.socials}>
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
