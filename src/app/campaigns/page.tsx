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

export default function CampaignsPage() {
  return (
    <div className="campaigns-page">
      
      {/* Hero Section */}
<section className="campaigns-hero">
  <div className="hero-container">
    <div className="hero-image">
      <img src="/media/elise-tempo.webp" alt="Elise performing" />
    </div>

    <div className="hero-content">
      <h1>Campaigns</h1>
      <p>
        One of our main goals is to empower local music through the 
        promotion of Florida musicians. We have a rotating roster of Swamp 
        Records artists, but we also have a Campaigns Team focused on working 
        with musicians to build marketing plans for upcoming releases and projects. 
        We offer an array of services, like event curation, photography, social 
        media rollouts that can help your music grow! We have Campaigns applications 
        open on a rolling basis for artists interested in collaborating with our team. 
        Application information and updates can also be found on our Instagram.
      </p>
    </div>

    <div className="hero-image">
      <img src="/media/eileen-israeljones.webp" alt="Eileen Israel Jones performing" />
    </div>
  </div>

  <style>{`
    .campaigns-hero {
      background-color: black;
      padding: 5rem 1.5rem;
    }
    .hero-container {
      max-width: 1280px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      gap: 2rem;
      align-items: center;
    }
    .hero-content {
      text-align: center;
      color: white;
    }
    .hero-content h1 {
      font-size: 2.5rem;
      font-weight: bold;
    }
    .hero-content p {
      margin-top: 1rem;
      font-size: 18px;
      line-height: 1.6;
    }
    .hero-image {
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    }
    .hero-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 768px) {
      .hero-container {
        grid-template-columns: 1fr;
      }
      .hero-content {
        order: -1; /* Puts text above images */
      }
    }
  `}</style>
</section>

      {/* Current Campaigns */}
      {/* <section className="current-campaigns">
        <div className="container">
          <h2>Current Campaigns</h2>
          <div className="campaigns-grid">
            {campaigns.map((campaign, index) => (
              <div key={index} className="campaign-card">
                <div className="campaign-image">
                  <Image
                    src={campaign.image}
                    alt={campaign.artist}
                    width={400}
                    height={250}
                    className="campaign-photo"
                  />
                  <div className={`campaign-status ${campaign.status.toLowerCase()}`}>
                    {campaign.status}
                  </div>
                </div>
                <div className="campaign-info">
                  <h3>{campaign.title}</h3>
                  <p className="campaign-artist">{campaign.artist}</p>
                  <p className="campaign-description">{campaign.description}</p>
                  <div className="campaign-services">
                    <h4>Services Included:</h4>
                    <ul>
                      {campaign.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="campaign-dates">
                    <span>{campaign.startDate} - {campaign.endDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Previous Campaigns */}
      {/* <section className="previous-campaigns">
        <div className="container">
          <h2>Previous Campaigns</h2>
          <p className="section-intro">
            A look back at some of our most successful campaigns and the impact they had on the Gainesville music scene.
          </p>
          <div className="campaigns-grid previous">
            {previousCampaigns.map((campaign, index) => (
              <div key={index} className="campaign-card previous">
                <div className="campaign-info">
                  <h3>{campaign.title}</h3>
                  <p className="campaign-artist">{campaign.artist}</p>
                  <p className="campaign-year">{campaign.year}</p>
                  <p className="campaign-description">{campaign.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

{/* Application Section */}
<section className="application-section">
  <div className="container">
    <h2>Campaign Applications</h2>
    <div className="application-content">
      {/* Status */}
      <div className="application-status">
        <h3 style={{ marginBottom: '1rem' }}>Application Status</h3>
        <div className="status-cards">

          <div className="status-card coming-soon">
            <span className="status-badge">Coming Soon</span>
            <h4>Spring 2026</h4>
            <p className="status">Opening Soon...</p>
            <p>Applications for Spring 2026 campaigns will open soon. Stay tuned for updates and prepare your materials!</p>
          </div>

        </div>
      </div>

      {/* Info */}
      <div className="application-info">
        <h3>What We Look For</h3>
        <ul>
          <li>Original, high-quality music</li>
          <li>Active social media presence</li>
          <li>Professional attitude and work ethic</li>
          <li>Gainesville/North Central Florida based</li>
          <li>Clear artistic vision and goals</li>
          <li>Willingness to collaborate and grow</li>
        </ul>
        
        <h3>Campaign Services</h3>
        <ul>
          <li>Social media marketing and management</li>
          <li>Public relations and media outreach</li>
          <li>Event booking and coordination</li>
          <li>Content creation (photos, videos, graphics)</li>
          <li>Merchandise design and production</li>
          <li>Tour support and logistics</li>
        </ul>

        {/* Email Button */}
        <a href="mailto:campaigns.swamprecords@gmail.com" className="email-button">
          📩 Contact Our Team
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  );
} 