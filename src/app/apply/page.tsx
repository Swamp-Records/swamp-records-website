// src/app/apply/page.tsx
'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ApplyPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main style={{ ...styles.container, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Join Swamp Records</h1>
        <p style={styles.text}>
          Swamp Records is a nonprofit organization that operates under the University of Florida. 
          We aim to help students gain hands on experience in the music industry while getting 
          involved in local music. We offer roles that cover all aspects of artist promotion, 
          including booking, marketing, photography, graphic design, and everything in-between.
        </p>
        <p style={styles.text}>
          We have applications for students to apply each semester on a rolling basis. 
          If you are a student and are interested in applying to be a part of our team, you can 
          check out our Instagram for updates on application deadlines. We usually open them up 
          at the start of each semester.
        </p>

        <h3 style={styles.closedApps}>Applications for Fall 2025 are closed. Check back soon for Spring 2026!</h3>

        {/* <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSf5cfDOwbMQsPdck9nrLOfMcLs37f2luGiG8YV0krrh8gS1tQ/viewform?usp=header"
          target="_blank"
          style={styles.button}
        >
          Apply Now
        </Link> */}
      </div>

      <div
        style={{
          ...styles.imageWrapper,
          height: isMobile ? '300px' : '500px',
        }}
      >
        <Image
          src="/media/elise-crowd3.webp"
          alt="Crowd at a Swamp Records event"
          fill
          style={{ objectFit: 'cover', borderRadius: '16px' }}
        />
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    alignItems: 'center',
    minHeight: '80vh',
    padding: '4rem',
    backgroundColor: 'black',
    color: '#f5f5f5',
    marginTop: '80px',
  },
  content: {
    maxWidth: '500px',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: 700,
  },
  text: {
    fontSize: '1.2rem',
    lineHeight: 1.6,
    marginBottom: '2rem',
    color: '#cccccc',
  },
  button: {
    display: 'inline-block',
    padding: '0.8rem 2rem',
    backgroundColor: '#8B0000',
    color: 'white',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    transition: 'all 0.3s ease',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: '500px',
    borderRadius: '16px',
    overflow: 'hidden',
  },
  closedApps: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  }
};
