import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

const campaigns = [
  {
    title: "Spring 2025 Artist Campaign",
    artist: "Buboy",
    image: "/graphics/buboy.webp",
    status: "Active",
    description: "Comprehensive marketing campaign including social media, PR, and event coordination for Buboy's latest release.",
    services: ["Social Media Marketing", "PR Campaign", "Event Booking", "Content Creation"],
    startDate: "January 2025",
    endDate: "May 2025"
  },
  {
    title: "The Nancys Album Launch",
    artist: "The Nancys", 
    image: "/graphics/nancys.webp",
    status: "Active",
    description: "Full album launch campaign with merchandise, tour support, and digital marketing strategy.",
    services: ["Album Launch", "Merchandise Design", "Tour Support", "Digital Marketing"],
    startDate: "February 2025",
    endDate: "June 2025"
  },
  {
    title: "Mystery Artist Reveal",
    artist: "Coming Soon",
    image: "/graphics/mystery.webp",
    status: "Planning",
    description: "Top-secret campaign for our newest artist. Details to be revealed soon!",
    services: ["Brand Development", "Launch Strategy", "Social Media", "Event Planning"],
    startDate: "TBA",
    endDate: "TBA"
  }
];

const previousCampaigns = [
  {
    title: "Swamp Cats Summer Tour",
    artist: "The Swamp Cats",
    year: "2023",
    description: "Successful summer tour across Florida with sold-out shows in Gainesville, Orlando, and Tampa."
  },
  {
    title: "Echo Valley Folk Festival",
    artist: "Echo Valley", 
    year: "2022",
    description: "Curated folk festival featuring local and regional artists in the heart of Gainesville."
  },
  {
    title: "Gators Punk Revolution",
    artist: "The Gators",
    year: "2021", 
    description: "Underground punk showcase that brought the Gainesville scene together."
  }
];

export default function CampaignsPage() {
  return (
    <div className="campaigns-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="campaigns-hero">
        <div className="hero-content">
          <h1>Campaigns</h1>
          <p className="hero-subtitle">Strategic marketing and promotion for Gainesville&apos;s finest artists</p>
        </div>
      </section>

      {/* Current Campaigns */}
      <section className="current-campaigns">
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
      </section>

      {/* Previous Campaigns */}
      <section className="previous-campaigns">
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
      </section>

      {/* Application Section */}
      <section className="application-section">
        <div className="container">
          <h2>Campaign Applications</h2>
          <div className="application-content">
            <div className="application-status">
              <h3>Application Status</h3>
              <div className="status-cards">
                <div className="status-card closed">
                  <h4>Spring 2025</h4>
                  <p className="status">Applications Closed</p>
                  <p>Thank you for your interest. We've received an overwhelming response and are no longer accepting applications for Spring 2025 campaigns.</p>
                </div>
                <div className="status-card coming-soon">
                  <h4>Fall 2025</h4>
                  <p className="status">Coming Soon</p>
                  <p>Applications for Fall 2025 campaigns will open in August. Stay tuned for updates and prepare your materials!</p>
                </div>
              </div>
            </div>
            
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 