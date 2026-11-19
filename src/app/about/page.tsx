// src/app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import styles from './about.module.css';

const images = [
  'elise-buboy.webp',
  'elise-crowd.webp',
  'hayley-tempo.webp',
  'elise-tempo.webp',
  'flipturn.webp',
  'hayley-buboy.webp',
  'hayley-nancys2.webp',
  'nancys.webp',
];

const credits: Record<string, string> = {
  'elise-buboy.webp': 'Photo: Elise Norman',
  'elise-crowd.webp': 'Photo: Elise Norman',
  'hayley-tempo.webp': 'Photo: Hayley Power',
  'elise-tempo.webp': 'Photo: Elise Norman',
  'flipturn.webp': '',
  'hayley-buboy.webp': 'Photo: Hayley Power',
  'hayley-nancys2.webp': 'Photo: Hayley Power',
  'nancys.webp': '',
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>About</h1>

      <div className={styles.content}>
        <section className={styles.block}>
          <h2 className={styles.heading}>
            <FontAwesomeIcon icon={faCompactDisc} className={styles.icon} />
            What is Swamp Records?
          </h2>
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

        <section className={styles.block}>
          <h2 className={styles.heading}>
            <FontAwesomeIcon icon={faCompactDisc} className={styles.icon} />
            Where do I find shows?
          </h2>
          <p>
            Follow us on{' '}
            <a
              href="https://www.instagram.com/swamprecordsuf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{' '}
            for show announcements, or check our <Link href="/events">events page</Link>.
          </p>
        </section>

        <section className={styles.block}>
          <h2 className={styles.heading}>
            <FontAwesomeIcon icon={faCompactDisc} className={styles.icon} />
            How do I get involved?
          </h2>
          <p>
            Interested in joining a team? Head to our <Link href="/apply">apply page</Link>{' '}
            to see open roles and application dates.
          </p>
        </section>
      </div>

      <div className={styles.galleryWrap}>
        <section className={styles.gallery}>
          {images.map((filename) => {
            const credit = credits[filename] || '';
            const hasCredit = credit.trim() !== '';
            return (
              <div
                key={filename}
                className={`${styles.item} ${hasCredit ? styles.hasCredit : ''}`}
                data-credit={hasCredit ? credit : ''}
              >
                <Image
                  src={`/media/${filename}`}
                  alt={hasCredit ? `${credit.replace('Photo: ', '')} photo` : 'Swamp Records event photo'}
                  fill
                  sizes="(max-width: 900px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}