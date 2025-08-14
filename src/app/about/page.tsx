'use client';

import Image from "next/image";

export default function AboutPage() {
  const images = [
    "elise-buboy.webp",
    "elise-crowd.webp",
    "elise-nancys.webp",
    "elise-tempo.webp",
    "flipturn.webp",
    "hayley-buboy.webp",
    "hayley-nancys2.webp",
    "nancys.webp",
  ];

  return (
    <main className="about-page">
      <section className="about-text">
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Swamp Records</h1>
          {/* <p className="hero-subtitle">Discover the talent that makes Gainesville's music scene thrive</p> */}
        </div>
      </section>
        <p>
          Swamp Records is a Gainesville-based, artist resource agency run by
          students at University of Florida. We offer marketing, PR,
          advertising, and booking services to musicians and bands in the North
          Central Florida area while providing hands-on experience for students
          pursuing careers within the music industry.
        </p>
        <p>
          We strive to empower the Florida music scene through planning concerts,
          events, and festivals in the Gainesville area. Aiming to promote all
          aspects of local art, music, and culture, we collaborate with Gainesville
          businesses, nonprofits, and artists to develop our community. We&apos;ve been
          a part of Gainesville music for over 10 years and we&apos;re dedicated to
          continuing its legacy in Florida through our continued work.
        </p>
        <p>
          Overall we&apos;re a collective of creatives, organizers, taste-makers, and
          friends working to uplift Gainesville.
        </p>
      </section>

      <section className="gallery">
        {images.map((filename) => (
          <div key={filename} className="gallery-item">
            <Image
              src={`/media/${filename}`}
              alt={filename}
              fill
              sizes="(max-width: 900px) 50vw, 25vw"
              priority={false}
            />
          </div>
        ))}
      </section>

      <style jsx>{`
        .about-page {
          padding: 0 2rem;
          padding-bottom: 4rem;
          max-width: 1200px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          color: white;
        }

        .about-text {
          text-align: center;
          margin-bottom: 3rem;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: bold;
        }

        p {
          max-width: 800px;
          margin: 0.5rem auto;
          line-height: 1.6;
          color: white;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 1rem;
        }

        .gallery-item {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          min-height: 200px; /* fix initial height */
          overflow: hidden;
          border-radius: 8px;
          background-color: #222; /* optional: a dark bg to hide flash */
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        /* Target the Next.js Image internal img */
        .gallery-item :global(img) {
          object-fit: cover;
          width: 100%;
          height: 100%;
          /* Make sure transform is smooth */
          transition: transform 0.3s ease;
        }

        /* Hover effect: scale up the image */
        .gallery-item:hover :global(img) {
          transform: scale(1.05);
        }

        @media (max-width: 900px) {
          .gallery {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
          }
        }
      `}</style>
    </main>
  );
}

