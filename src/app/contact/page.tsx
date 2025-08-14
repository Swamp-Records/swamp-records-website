export default function ContactPage() {
  return (
    <div className="contact-page">
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
        </div>
      </section>

      {/* Contact Information */}
      {/* <section className="contact-info-section">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h3>Email</h3>
              <p>swamprecords@gmail.com</p>
              <p className="contact-note">For general inquiries and artist submissions</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <h3>Location</h3>
              <p>Gainesville, Florida</p>
              <p className="contact-note">Serving North Central Florida</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faUniversity} />
              </div>
              <h3>University of Florida</h3>
              <p>Student-run organization</p>
              <p className="contact-note">Based at the University of Florida</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <h3>Response Time</h3>
              <p>24-48 hours</p>
              <p className="contact-note">We'll get back to you quickly</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <h2>Send Us a Message</h2>
          <div className="form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select id="subject" name="subject" required>
                  <option value="">Select a subject</option>
                  <option value="artist-inquiry">Artist Inquiry</option>
                  <option value="team-application">Team Application</option>
                  <option value="event-inquiry">Event Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows={6} required></textarea>
              </div>
              
              <button type="submit" className="submit-button">Send Message</button>
            </form>
            
            <div className="form-info">
              <h3>What to Include</h3>
              <ul>
                <li><strong>Artist Inquiries:</strong> Include links to your music, social media, and what you&apos;re looking for</li>
                <li><strong>Team Applications:</strong> Mention your interests, experience, and why you want to join</li>
                <li><strong>Event Inquiries:</strong> Include venue details, date, and type of event</li>
                <li><strong>Partnerships:</strong> Describe your organization and collaboration ideas</li>
              </ul>
              
              <div className="response-time">
                <h4>Response Time</h4>
                <p>We typically respond within 24-48 hours during business days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I apply to join the team?</h3>
              <p>Visit our <a href="/apply">application page</a> for current application status and available positions. We typically open applications in August for Fall semester and January for Spring semester.</p>
            </div>
            
            <div className="faq-item">
              <h3>How can artists work with Swamp Records?</h3>
              <p>We&apos;re always looking for new talent! Send us an email with links to your music and social media. We work with artists based in the Gainesville/North Central Florida area.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you book events at venues?</h3>
              <p>Yes! We work with venues, artists, and organizations to create memorable events. Contact us with your event details and we&apos;ll discuss collaboration opportunities.</p>
            </div>
            
            <div className="faq-item">
              <h3>Are you affiliated with UF?</h3>
              <p>Yes, we&apos;re a student-run organization at the University of Florida. Our team consists of UF students from various majors who are passionate about the music industry.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you offer internships?</h3>
              <p>While we don&apos;t offer formal internships, joining our team provides hands-on experience in the music industry. Many of our alumni have gone on to successful careers in music, marketing, and event management.</p>
            </div>
            
            <div className="faq-item">
              <h3>How can I stay updated on events?</h3>
              <p>Follow us on social media for the latest event announcements, ticket releases, and behind-the-scenes content. We post regularly about upcoming shows and artist updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      {/* <section className="social-section">
        <div className="container">
          <h2>Follow Us</h2>
          <p>Stay connected with Swamp Records on social media for the latest updates, behind-the-scenes content, and exclusive announcements.</p>
          <div className="social-grid">
            <a href="#" className="social-card">
              <h3>Instagram</h3>
              <p>Behind-the-scenes content, artist spotlights, and event updates</p>
            </a>
            <a href="#" className="social-card">
              <h3>YouTube</h3>
              <p>Live performances, artist interviews, and event highlights</p>
            </a>
            <a href="#" className="social-card">
              <h3>TikTok</h3>
              <p>Fun content, artist takeovers, and quick updates</p>
            </a>
            <a href="#" className="social-card">
              <h3>LinkedIn</h3>
              <p>Professional updates, team announcements, and industry insights</p>
            </a>
          </div>
        </div>
      </section> */}

    </div>
  );
} 