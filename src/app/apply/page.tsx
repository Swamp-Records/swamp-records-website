// src/app/apply/page.tsx
'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { teams } from '@/data/teams';

// Brand palette (from the Figma color swatches). fg = text/line color on that block.
const teamColors = [
  { bg: '#C8F560', fg: '#000' }, // lime
  { bg: '#B8A9FF', fg: '#000' }, // lavender
  { bg: '#E8420A', fg: '#fff' }, // orange
  { bg: '#FF74C8', fg: '#000' }, // pink
  { bg: '#2F5BFF', fg: '#fff' }, // blue
  { bg: '#FFE14D', fg: '#000' }, // yellow
  { bg: '#E52A1E', fg: '#fff' }, // red
  { bg: '#C4B08F', fg: '#000' }, // tan
];

// Falls back to Impact in case something goes wrong with Dreamwalker font; THP costs $$$ 
const displayFont = "'Dreamwalker', Impact, 'Arial Narrow Bold', sans-serif";
const bodyFont = "'Helvetica Neue', Helvetica, Arial, sans-serif";

export default function ApplyPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <main style={{ ...styles.container, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>
        <div style={styles.content}>
          <h1 style={styles.heading}>Join Swamp Records</h1>          <p style={styles.text}>
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

          <h3 style={styles.closedApps}>Applications open on the first week of each fall &amp; spring semester!</h3>

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

      <section
        style={{
          ...styles.teamsSection,
          padding: isMobile ? '3rem 1.5rem 4rem' : '5rem 4rem 6rem',
        }}
      >
      <h2 style={styles.teamsHeading}>
        Teams <span style={{ color: '#fff', fontFamily: 'Impact, Arial, sans-serif' }}>&amp;</span> Roles
      </h2>

        <div style={styles.teamsGrid}>
          {teams.map((team, i) => {
            const c = teamColors[i % teamColors.length];
            return (
              <div key={team.name} style={{ ...styles.teamCard, backgroundColor: c.bg }}>
                <h3 style={{ ...styles.teamName, color: c.fg, borderBottomColor: c.fg }}>
                  {team.name}
                </h3>
                <ul style={styles.roleList}>
                  {team.roles.map((role) => (
                    <li
                      key={role}
                      style={{ ...styles.roleItem, color: c.fg, borderBottomColor: c.fg }}
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
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
    fontFamily: displayFont,
    fontWeight: 400,
    fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
    lineHeight: 1.1,
    letterSpacing: '0.03em',
    textTransform: 'uppercase',
    marginBottom: '1.5rem',
  },
  text: {
    fontFamily: bodyFont,
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
    fontFamily: bodyFont,
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },

teamsSection: {
  backgroundColor: '#000',
},
teamsHeading: {
  fontFamily: displayFont,
  fontWeight: 400,
  fontSize: 'clamp(3.5rem, 11vw, 9rem)',
  lineHeight: 0.9,
  textTransform: 'uppercase',
  color: '#fff',
  marginBottom: '3rem',
},
  teamsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1rem',
  },
  teamCard: {
    padding: '1.75rem',
  },
  teamName: {
    fontFamily: displayFont,
    fontWeight: 400,
    fontSize: '2.25rem',
    lineHeight: 1,
    textTransform: 'uppercase',
    paddingBottom: '1rem',
    marginBottom: '0.5rem',
    borderBottomWidth: '3px',
    borderBottomStyle: 'solid',
  },
  roleList: {
    listStyle: 'none',
  },
  roleItem: {
    fontFamily: bodyFont,
    fontSize: '0.95rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    padding: '0.7rem 0',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
  },
};