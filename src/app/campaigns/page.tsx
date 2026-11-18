// const campaigns = [
//   {
//     title: "Gnomes of Neptune",
//     artist: "Fall 2025 Artist Campaign",
//     image: "/graphics/buboy.webp",
//     status: "Active",
//     description: "Comprehensive marketing campaign including social media, PR, and event coordination for Buboy's latest release.",
//     services: ["Social Media Marketing", "PR Campaign", "Event Booking", "Content Creation"],
//     startDate: "August 2025",
//     endDate: "December 2025"
//   }
// ];

// const previousCampaigns = [
//   {
//     title: "Swamp Cats Summer Tour",
//     artist: "The Swamp Cats",
//     year: "2023",
//     description: "Successful summer tour across Florida with sold-out shows in Gainesville, Orlando, and Tampa."
//   },
//   {
//     title: "Echo Valley Folk Festival",
//     artist: "Echo Valley", 
//     year: "2022",
//     description: "Curated folk festival featuring local and regional artists in the heart of Gainesville."
//   },
//   {
//     title: "Gators Punk Revolution",
//     artist: "The Gators",
//     year: "2021", 
//     description: "Underground punk showcase that brought the Gainesville scene together."
//   }
// ];

// src/app/campaigns/page.tsx
import Image from 'next/image';
import styles from './campaigns.module.css';

export default function CampaignsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Campaigns</h1>

        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <p>
              One of our main goals is to empower local music through the
              promotion of Florida musicians. We have a rotating roster of Swamp
              Records artists, but we also have a Campaigns Team focused on working
              with musicians to build marketing plans for upcoming releases and projects.
              We offer an array of services, like event curation, photography, social
              media rollouts that can help your music grow!
            </p>
            <p>
              We have Campaigns applications open on a rolling basis for artists
              interested in collaborating with our team.
            </p>
            <p>Application information and updates can also be found on our Instagram.</p>
          </div>

          <div className={styles.photos}>
            <div className={`${styles.photo} ${styles.photoOne}`}>
              <Image src="/media/elise-tempo.webp" alt="Elise performing" width={800} height={1000} />
            </div>
            <div className={`${styles.photo} ${styles.photoTwo}`}>
              <Image src="/media/eileen-israeljones.webp" alt="Eileen Israel Jones performing" width={800} height={1000} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.applicationSection}>
        <h2 className={styles.sectionTitle}>Campaign Applications</h2>

        <div className={styles.applicationContent}>
          <div>
            <h3 className={styles.subTitle}>Application Status</h3>
            <div className={styles.statusCard}>
              <h4>Fall 2026</h4>
              <p>Applications for Fall 2026 are closed. Check back for Spring 2027!</p>
            </div>
          </div>

          <div className={styles.applicationInfo}>
            <h3 className={styles.subTitle}>What We Look For</h3>
            <ul>
              <li>Original, high-quality music</li>
              <li>Professional attitude and work ethic</li>
              <li>Gainesville based</li>
              <li>Clear artistic vision and goals</li>
              <li>Willingness to collaborate and grow</li>
            </ul>

            <h3 className={styles.subTitle}>Campaign Services</h3>
            <ul>
              <li>Social media marketing and management</li>
              <li>Public relations and media outreach</li>
              <li>Event booking and coordination</li>
              <li>Content creation (photos, videos, graphics)</li>
            </ul>

            <a href="mailto:campaigns.swamprecords@gmail.com" className={styles.emailButton}>
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}