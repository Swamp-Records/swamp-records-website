// src/app/artists/page.tsx
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

interface Artist {
  name: string;
  image: string;
  logo: string;
  genre: string;
  description: string;
  link: string;
  // optional: fill these in and the icons appear automatically
  instagram?: string;
  tiktok?: string;
  youtube?: string;
}

const currentArtists: Artist[] = [
  {
    name: "Buboy",
    image: "/media/elise-buboy.webp",
    logo: "/graphics/buboy-logo.png",
    genre: "Indie Rock",
    description: "Filipino-American indie rock artist who drinks a lot of milk and goes to the movie theater alone (separate activities, rarely together).",
    link: "https://www.buboymusic.com/home"
  },
  {
    name: "The Nancys",
    image: "/media/hayley-nancys.webp",
    logo: "/graphics/nancys-logo.png",
    genre: "Indie Rock",
    description: "An indie rock band that started with a simple recipe: good friends, great music, and the occasional interruption from their beloved cats.",
    link: "https://thenancysband.com/"
  },
  {
    name: "Alex Willow",
    image: "/graphics/alexwillow.webp",
    logo: "/graphics/alexwillow-logo.png",
    genre: "Indie Folk Singer-Songwriter",
    description: "A singer-songwriter whose music houses a wisdom rarely found, imbued with the urgency and vitality characteristic of youth.",
    link: "https://alexwillowmusic.com/"
  }
];

// const previousArtists = [
//   {
//     name: "  ",
//     image: "/artists/swamp-cats.jpg",
//     genre: "Blues Rock",
//     year: "2023",
//     description: ""
//   }
// ];

const displayFont = "'Dreamwalker', Impact, 'Arial Narrow Bold', sans-serif";
const nameFont = "'Arial Black', 'Helvetica Neue', Helvetica, Arial, sans-serif";

export default function ArtistsPage() {
  return (
    <div className="artists-page">
      {/* Hero: giant heading that the photos overlap, like the wireframe */}
      <section className="ap-hero">
        <h1 className="ap-title">Our Artists</h1>
      </section>

      {/* Current Artists */}
      <section className="ap-section">
        <div className="ap-grid">
          {currentArtists.map((artist) => (
            <article key={artist.name} className="ap-card">
              <a
                href={artist.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ap-photo"
                aria-label={`${artist.name} website`}
              >
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  sizes="(max-width: 900px) 90vw, 30vw"
                  style={{ objectFit: 'cover' }}
                />
                {/* Logo + description appear over the photo on hover */}
                <div className="ap-overlay">
                  <Image
                    src={artist.logo}
                    alt=""
                    width={200}
                    height={100}
                    className="ap-logo"
                  />
                  <p>{artist.description}</p>
                </div>
              </a>

              <h3 className="ap-name">{artist.name}</h3>
              <p className="ap-genre">{artist.genre}</p>
              {/* Shown instead of the hover overlay on touch devices */}
              <p className="ap-desc-touch">{artist.description}</p>

              <div className="ap-socials">
                <a href={artist.link} target="_blank" rel="noopener noreferrer" aria-label={`${artist.name} website`}>
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
                {artist.instagram && (
                  <a href={artist.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${artist.name} Instagram`}>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                )}
                {artist.tiktok && (
                  <a href={artist.tiktok} target="_blank" rel="noopener noreferrer" aria-label={`${artist.name} TikTok`}>
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>
                )}
                {artist.youtube && (
                  <a href={artist.youtube} target="_blank" rel="noopener noreferrer" aria-label={`${artist.name} YouTube`}>
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Previous Artists */}
      {/* <section className="previous-artists">
        <div className="container">
          <h2>Previous Artists</h2>
          <p className="section-intro">
            These incredible artists have been part of the Swamp Records family. 
            Their contributions continue to inspire the Gainesville music scene.
          </p>
          <div className="artists-grid previous">
            {previousArtists.map((artist, index) => (
              <div key={index} className="artist-card previous">
                <div className="artist-image">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={300}
                    height={200}
                    className="artist-photo"
                  />
                  <div className="artist-year">{artist.year}</div>
                </div>
                <div className="artist-info">
                  <h3>{artist.name}</h3>
                  <p className="artist-genre">{artist.genre}</p>
                  <p className="artist-description">{artist.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Join Us Section */}
      <section className="join-section">
        <div className="container">
          <h2 style={{ marginBottom: '1rem' }}>Want to Join Our Family?</h2>
          <p>
            Are you a musician or band looking for support in the Gainesville area? 
            We&apos;re always looking for new talent to work with.
          </p>
          <div className="cta-buttons">
            <a href="/campaigns" className="cta-button primary">View Campaigns</a>
            <a href="/contact" className="cta-button secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      <style>{`
.ap-hero {
  background: transparent;
  margin-top: 80px;
  padding: 3rem 2rem 0;
  margin-bottom: calc(-1 * clamp(2rem, 9vw, 8rem));
  text-align: center;
  position: relative;
  z-index: 3;
  pointer-events: none;
}
.ap-title {
  font-family: ${displayFont};
  font-weight: 400;
  font-size: clamp(4rem, 15vw, 12rem);
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
}

        .ap-section {
          background: black;
          padding: 0 2rem 5rem;
          position: relative;
          z-index: 2;
        }
        .ap-grid {
          max-width: 1400px;
          margin: calc(-1 * clamp(1rem, 4vw, 3.5rem)) auto 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem 2rem;
          align-items: start;
        }

        .ap-photo {
          position: relative;
          display: block;
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: #111;
          margin-bottom: 1.25rem;
        }
        .ap-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1.5rem;
          text-align: center;
          background: rgba(0, 0, 0, 0.7);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .ap-photo:hover .ap-overlay,
        .ap-photo:focus-visible .ap-overlay {
          opacity: 1;
        }
        .ap-logo {
          width: 70%;
          max-width: 200px;
          height: auto;
          object-fit: contain;
        }
        .ap-overlay p {
          font-family: Helvetica, Arial, sans-serif;
          font-size: 0.8rem;
          line-height: 1.4;
        }

        .ap-name {
          font-family: ${nameFont};
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          line-height: 1.15;
          margin-bottom: 0.35rem;
        }
        .ap-genre {
          font-family: Helvetica, Arial, sans-serif;
          font-size: 0.85rem;
          color: #b0b0b0;
          margin-bottom: 0.75rem;
        }
        .ap-desc-touch {
          display: none;
          font-family: Helvetica, Arial, sans-serif;
          font-size: 0.9rem;
          line-height: 1.5;
          color: #cccccc;
          margin-bottom: 0.75rem;
        }
        .ap-socials {
          display: flex;
          gap: 0.9rem;
          font-size: 1.1rem;
        }
        .ap-socials svg {
          width: 1em;
          height: 1em;
        }
        .ap-socials a:hover {
          color: gray;
        }

        /* Touch devices have no hover: show text under the photo instead */
        @media (hover: none) {
          .ap-overlay { display: none; }
          .ap-desc-touch { display: block; }
        }

        @media (min-width: 600px) {
          .ap-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* Desktop: three columns with the staggered, bulletin-board feel */
        @media (min-width: 900px) {
          .ap-section { padding: 0 4rem 6rem; }
          .ap-hero { padding: 3rem 4rem 0; }
          .ap-grid { grid-template-columns: repeat(3, 1fr); gap: 3rem; }
          .ap-card:nth-child(3n + 1) { margin-top: 0; }
          .ap-card:nth-child(3n + 2) { margin-top: 4.5rem; }
          .ap-card:nth-child(3n) { margin-top: 1.5rem; }
          .ap-card:nth-child(3n + 2) .ap-photo { aspect-ratio: 1 / 1; }
          .ap-card:nth-child(3n) .ap-photo { aspect-ratio: 3 / 4; }
        }
      `}</style>
    </div>
  );
}