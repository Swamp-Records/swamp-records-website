import { getEvents } from '@/notionDB/notion';

export default async function EventsPage() {
  // Fetch events from Notion database 
  const events = await getEvents();
  
  return (
    <div className="events-page">
      
      {/* Hero Section */}
      <section className="events-hero">
        <div className="hero-content">
          <h1>Events</h1>
          <p className="hero-subtitle">Live music, unforgettable experiences, and the best of Gainesville&apos;s music scene</p>
        </div>
      </section>

      {/* All Events */}
      <section className="upcoming-events">
        <div className="container">
          <h2>All Events</h2>
          <div className="events-grid">
            {/* generate event cards by mapping through the events array */}
            {events.map((event, index) => {
              //format the date for when it is being displayed (kept as a date obj for status check)
              const formattedDate = new Date(event.date + "T00:00:00").toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              });

              //format today's date to match the eventDate format (for status of event)
              const today = new Date();
              const currDate = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');

            return (
              <div key={index} className="event-card upcoming">
                <div className="event-image">
                  <img
                    src={event.imageUrl}
                    alt={event.name}
                    width={400}
                    height={250}
                    className="event-photo"
                  />
                  {/*change status depending on date*/}
                  {event.date === currDate ? <div className="event-status">Today!</div> : event.date > currDate ? <div className="event-status">Upcoming</div> : <div className="event-status">Past</div>}
                </div>
                <div className="event-info">
                  <h3>{event.name}</h3>
                  <div className="event-details">
                    <p className="event-date">{formattedDate} at {event.time}</p>
                    <p className="event-location">{event.location}</p>
                  </div>
                  <p className="event-description">{event.description}</p>
                  {/*Only display the 'Get Tickets' button if there is a link to buy tickets*/}
                  {event.ticketLink != "" ? <button className="event-button"><a href={event.ticketLink} style={{ color: "black" }}>Get Tickets</a></button> : <p className="event-ticket">Get tickets at the door.</p>}
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Past Events */}
      {/* <section className="past-events">
        <div className="container">
          <h2>Past Events</h2>
          <p className="section-intro">
            Relive the magic of our previous events and the incredible moments we've shared with the Gainesville community.
          </p>
          <div className="events-grid past">
            {pastEvents.map((event, index) => (
              <div key={index} className="event-card past">
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <div className="event-details">
                    <p className="event-date">{event.date}</p>
                    <p className="event-location">{event.location}</p>
                  </div>
                  <p className="event-description">{event.description}</p>
                  <div className="event-highlights">
                    {event.highlights.map((highlight, highlightIndex) => (
                      <span key={highlightIndex} className="highlight-tag">{highlight}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Event Calendar */}
      {/* <section className="calendar-section">
        <div className="container">
          <h2>Event Calendar</h2>
          <div className="calendar-content">
            <div className="calendar-info">
              <h3>Stay Updated</h3>
              <p>
                Follow us on social media for the latest event announcements, ticket releases, and behind-the-scenes content.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
            
            <div className="calendar-cta">
              <h3>Host Your Event</h3>
              <p>
                Interested in hosting an event with Swamp Records? We work with venues, artists, and organizations 
                to create memorable experiences in Gainesville.
              </p>
              <a href="/contact" className="cta-button">Contact Us</a>
            </div>
          </div>
        </div>
      </section> */}

    </div>
  );
} 