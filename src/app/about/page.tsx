'use client';

import Image from "next/image";

export default function AboutPage() {
  const images = [
    "elise-buboy.webp",
    "elise-crowd.webp",
    "hayley-tempo.webp",
    "elise-tempo.webp",
    "flipturn.webp",
    "hayley-buboy.webp",
    "hayley-nancys2.webp",
    "nancys.webp",
  ];

  const credits: Record<string, string> = {
    "elise-buboy.webp": "Photo: Elise Norman",
    "elise-crowd.webp": "Photo: Elise Norman",
    "hayley-tempo.webp": "Photo: Hayley Power",
    "elise-tempo.webp": "Photo: Elise Norman",
    "flipturn.webp": "",
    "hayley-buboy.webp": "Photo: Hayley Power",
    "hayley-nancys2.webp": "Photo: Hayley Power",
    "nancys.webp": "",
  };

  return (
    <main className="about-page">
      <section className="about-text">
        <section className="about-hero">
          <div className="hero-content">
            <h1>About Swamp Records</h1>
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
        {images.map((filename) => {
          const credit = credits[filename] || "";
          const hasCredit = credit.trim() !== "";
          return (
            <div
              key={filename}
              className={`gallery-item ${hasCredit ? "has-credit" : ""}`}
              data-credit={hasCredit ? credit : ""}
            >
              <Image
                src={`/media/${filename}`}
                alt={filename}
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                priority={false}
              />
            </div>
          );
        })}
      </section>


    </main>
  );
}
