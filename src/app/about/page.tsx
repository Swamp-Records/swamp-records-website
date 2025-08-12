import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

const directors = [
  {
    name: "Alex Johnson",
    role: "Executive Director",
    image: "/team/alex.jpg",
    bio: "Leading Swamp Records with 3+ years of experience in music industry management."
  },
  {
    name: "Sarah Chen",
    role: "Creative Director", 
    image: "/team/sarah.jpg",
    bio: "Oversees all creative campaigns and artist development initiatives."
  },
  {
    name: "Mike Rodriguez",
    role: "Operations Director",
    image: "/team/mike.jpg", 
    bio: "Manages day-to-day operations and event coordination."
  }
];

const teamMembers = [
  { name: "Emma Davis", role: "Marketing Coordinator" },
  { name: "Jordan Lee", role: "Event Manager" },
  { name: "Taylor Kim", role: "Artist Relations" },
  { name: "Casey Wilson", role: "Social Media Manager" },
  { name: "Riley Thompson", role: "PR Coordinator" },
  { name: "Quinn Martinez", role: "Booking Agent" },
  { name: "Avery Johnson", role: "Content Creator" },
  { name: "Morgan Smith", role: "Graphic Designer" },
  { name: "Drew Anderson", role: "Photography Lead" },
  { name: "Blake Taylor", role: "Video Production" },
  { name: "Cameron White", role: "Sound Engineer" },
  { name: "Jamie Brown", role: "Merchandise Coordinator" }
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Swamp Records</h1>
          <p className="hero-subtitle">Empowering the Florida music scene since 2013</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <div className="mission-content">
            <p>
              Swamp Records is a Gainesville-based, artist resource agency run by students at University of Florida. 
              We offer marketing, PR, advertising, and booking services to musicians and bands in the North Central 
              Florida area while providing hands-on experience for students pursuing careers within the music industry.
            </p>
            <p>
              We strive to empower the Florida music scene through planning concerts, events, and festivals in the 
              Gainesville area. Aiming to promote all aspects of local art, music, and culture, we collaborate with 
              Gainesville businesses, nonprofits, and artists to develop our community.
            </p>
            <p className="mission-highlight">
              Overall we're a collective of creatives, organizers, taste-makers, and friends working to uplift Gainesville.
            </p>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="directors-section">
        <div className="container">
          <h2>Leadership Team</h2>
          <div className="directors-grid">
            {directors.map((director, index) => (
              <div key={index} className="director-card">
                <div className="director-image">
                  <Image
                    src={director.image}
                    alt={director.name}
                    width={200}
                    height={200}
                    className="director-photo"
                  />
                </div>
                <h3>{director.name}</h3>
                <p className="director-role">{director.role}</p>
                <p className="director-bio">{director.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Our Team</h2>
          <p className="team-intro">
            Meet the dedicated students who make Swamp Records possible. 
            Our team spans across various disciplines, bringing diverse skills and perspectives to every project.
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2>By The Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>10+</h3>
              <p>Years in Gainesville</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Artists Supported</p>
            </div>
            <div className="stat-item">
              <h3>100+</h3>
              <p>Events Produced</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Team Members</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 