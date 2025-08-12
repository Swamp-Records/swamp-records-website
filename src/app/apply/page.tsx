import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ApplyPage() {
  return (
    <div className="apply-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="apply-hero">
        <div className="hero-content">
          <h1>Join Our Team</h1>
          <p className="hero-subtitle">Be part of the movement that's shaping Gainesville's music scene</p>
        </div>
      </section>

      {/* Application Status */}
      <section className="application-status-section">
        <div className="container">
          <h2>Application Status</h2>
          <div className="status-cards">
            <div className="status-card closed">
              <h3>Spring 2025</h3>
              <p className="status-badge">Applications Closed</p>
              <p>
                Thank you for your overwhelming interest in joining Swamp Records! 
                We've received an incredible number of applications for Spring 2025 
                and are no longer accepting new submissions.
              </p>
              <div className="status-details">
                <p><strong>Applications Received:</strong> 45+</p>
                <p><strong>Positions Available:</strong> 8</p>
                <p><strong>Interviews:</strong> February 2025</p>
              </div>
            </div>
            
            <div className="status-card coming-soon">
              <h3>Fall 2025</h3>
              <p className="status-badge">Coming Soon</p>
              <p>
                Applications for Fall 2025 positions will open in August. 
                This is your chance to join our team and help shape the future 
                of Gainesville's music scene.
              </p>
              <div className="status-details">
                <p><strong>Applications Open:</strong> August 2025</p>
                <p><strong>Positions Available:</strong> 10-12</p>
                <p><strong>Start Date:</strong> September 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Positions */}
      <section className="positions-section">
        <div className="container">
          <h2>Available Positions</h2>
          <p className="section-intro">
            We're looking for passionate students who want to gain real-world experience 
            in the music industry. No prior experience required - just enthusiasm and dedication.
          </p>
          
          <div className="positions-grid">
            <div className="position-category">
              <h3>Marketing & PR</h3>
              <ul>
                <li>Social Media Manager</li>
                <li>Content Creator</li>
                <li>PR Coordinator</li>
                <li>Brand Strategist</li>
              </ul>
            </div>
            
            <div className="position-category">
              <h3>Event Management</h3>
              <ul>
                <li>Event Coordinator</li>
                <li>Venue Liaison</li>
                <li>Logistics Manager</li>
                <li>Production Assistant</li>
              </ul>
            </div>
            
            <div className="position-category">
              <h3>Artist Relations</h3>
              <ul>
                <li>Artist Manager</li>
                <li>Booking Agent</li>
                <li>Talent Scout</li>
                <li>Artist Development</li>
              </ul>
            </div>
            
            <div className="position-category">
              <h3>Creative & Design</h3>
              <ul>
                <li>Graphic Designer</li>
                <li>Photographer</li>
                <li>Videographer</li>
                <li>Merchandise Designer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="qualifications-section">
        <div className="container">
          <h2>What We Look For</h2>
          <div className="qualifications-content">
            <div className="qualifications-list">
              <h3>Requirements</h3>
              <ul>
                <li>Current UF student (any major)</li>
                <li>Passion for music and the arts</li>
                <li>Strong work ethic and reliability</li>
                <li>Ability to work in a team environment</li>
                <li>Creative thinking and problem-solving skills</li>
                <li>Commitment to 10-15 hours per week</li>
              </ul>
            </div>
            
            <div className="qualifications-list">
              <h3>Preferred Skills</h3>
              <ul>
                <li>Experience with social media platforms</li>
                <li>Graphic design or photography skills</li>
                <li>Event planning or coordination experience</li>
                <li>Knowledge of the Gainesville music scene</li>
                <li>Strong written and verbal communication</li>
                <li>Experience with Adobe Creative Suite</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="container">
          <h2>What You'll Gain</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Real-World Experience</h3>
              <p>Work on actual campaigns and events that impact the local music scene.</p>
            </div>
            <div className="benefit-item">
              <h3>Industry Connections</h3>
              <p>Network with artists, venues, and professionals in the music industry.</p>
            </div>
            <div className="benefit-item">
              <h3>Portfolio Building</h3>
              <p>Create work samples and projects to showcase your skills.</p>
            </div>
            <div className="benefit-item">
              <h3>Leadership Opportunities</h3>
              <p>Take on leadership roles and manage your own projects.</p>
            </div>
            <div className="benefit-item">
              <h3>Creative Freedom</h3>
              <p>Express your creativity and bring your ideas to life.</p>
            </div>
            <div className="benefit-item">
              <h3>Community Impact</h3>
              <p>Make a difference in the Gainesville music community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="process-section">
        <div className="container">
          <h2>Application Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Submit Application</h3>
              <p>Complete the online application form with your information and experience.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Portfolio Review</h3>
              <p>Share examples of your work, projects, or creative ideas.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Interview</h3>
              <p>Meet with our team to discuss your interests and potential roles.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Onboarding</h3>
              <p>Join the team and start making an impact on Gainesville's music scene!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section">
        <div className="container">
          <h2>Questions?</h2>
          <p>
            Have questions about joining our team? We'd love to hear from you! 
            Reach out to us for more information about available positions and the application process.
          </p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
      </section>

      <Footer />
    </div>
  );
} 