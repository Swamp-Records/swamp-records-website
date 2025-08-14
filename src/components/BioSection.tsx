export default function BioSection() {
  return (
    <>
      <section id="about" className="bio-section">
        <div className="bio-container">
          {/* Text Section */}
          <div className="bio-text">
            <h2>About Swamp Records</h2>
            <p>
              Swamp Records is a Gainesville-based, student-run artist resource agency at the University of Florida.
              We provide marketing, PR, advertising, and booking services to musicians and bands across North Central Florida,
              while offering hands-on experience to students pursuing careers in the music industry.
            </p>
            <p>
              We&apos;re passionate about empowering the Florida music scene by organizing concerts, festivals, and creative events.
              Our mission is to spotlight local art, music, and culture by collaborating with Gainesville&apos;s businesses,
              nonprofits, and artists to grow and enrich the community.
            </p>
            <p className="highlight-text">
              We&apos;re a collective of creatives, organizers, taste-makers, and friends working to uplift Gainesville.
            </p>
          </div>

          {/* Image Section */}
          <div className="bio-images">
            <div className="image-card" data-credit="Photo: Elise Norman">
              <img src="/media/elise-buboy2.webp" alt="Performance" />
            </div>
            <div className="image-card tall" data-credit="Photo: Hayley Power">
              <img src="/media/hayley-tempo.webp" alt="Artist with mic" />
            </div>
            <div className="image-card" data-credit="Photo: Elise Norman">
              <img src="/media/elise-crowd2.webp" alt="Crowd at concert" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .bio-section {
          width: 100%;
          background-color: black;
          padding: 5rem 1.5rem;
        }
        .bio-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        .bio-text {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .bio-text h2 {
          font-size: 2.25rem;
          font-weight: bold;
          color: white;
        }
        .bio-text p {
          color: white;
          font-size: 1.125rem;
          line-height: 1.75rem;
        }
        .highlight-text {
          font-size: 1.25rem;
          font-weight: 600;
          font-style: italic;
          color: #BC4957;
        }
        .bio-images {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .image-card {
          position: relative;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        .image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }
        .image-card:hover img {
          transform: scale(1.05);
        }

        /* Photo credit overlay */
        .image-card::after {
          content: attr(data-credit);
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.6);
          color: white;
          font-size: 0.875rem;
          padding: 0.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .image-card:hover::after {
          opacity: 1;
        }

        .image-card.tall {
          grid-row: span 2;
        }
        @media (min-width: 768px) {
          .bio-section {
            padding: 5rem 3rem;
          }
          .bio-container {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
}
