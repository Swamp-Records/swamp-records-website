import Image from 'next/image';

const upcomingEvents = [
  {
    title: "Buboy Album Release Party",
    date: "March 15, 2025",
    time: "8:00 PM",
    location: "The Wooly, Gainesville",
    image: "/graphics/buboy.webp",
    description: "Join us for the official release party of Buboy's latest album. Live performance, merch, and special guests.",
    tickets: "Free Entry",
    status: "Upcoming"
  }
];

// const pastEvents = [
//   {
//     title: "Swamp Cats Farewell Show",
//     date: "December 2023",
//     location: "The Wooly, Gainesville",
//     description: "A bittersweet farewell to one of Gainesville's favorite bands. Sold out show with incredible energy.",
//     highlights: ["Sold Out", "Special Guests", "Merch Sale"]
//   },
//   {
//     title: "Echo Valley Folk Festival",
//     date: "October 2022",
//     location: "Depot Park, Gainesville", 
//     description: "A beautiful day of folk music in the heart of Gainesville. Featured 12 local and regional artists.",
//     highlights: ["12 Artists", "Food Trucks", "Family Friendly"]
//   },
//   {
//     title: "Gators Punk Revolution",
//     date: "August 2021",
//     location: "Loosey's, Gainesville",
//     description: "High-energy punk showcase that brought the underground scene together for an unforgettable night.",
//     highlights: ["5 Bands", "Mosh Pit", "Local Vendors"]
//   },
//   {
//     title: "Swamp Folk Collective Album Release",
//     date: "June 2020",
//     location: "Heartwood Soundstage, Gainesville",
//     description: "Collaborative folk project release party featuring 8 local musicians and special performances.",
//     highlights: ["8 Musicians", "Album Release", "Live Recording"]
//   }
// ];

export default function EventsPage() {
  return (
    <div className="events-page">
      
      {/* Hero Section */}
      <section className="events-hero">
        <div className="hero-content">
          <h1>Events</h1>
          <p className="hero-subtitle">Live music, unforgettable experiences, and the best of Gainesville&apos;s music scene</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming-events">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card upcoming">
                <div className="event-image">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={250}
                    className="event-photo"
                  />
                  <div className="event-status">{event.status}</div>
                </div>
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <div className="event-details">
                    <p className="event-date">{event.date} at {event.time}</p>
                    <p className="event-location">{event.location}</p>
                    <p className="event-tickets">{event.tickets}</p>
                  </div>
                  <p className="event-description">{event.description}</p>
                  <button className="event-button">Get Tickets</button>
                </div>
              </div>
            ))}
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