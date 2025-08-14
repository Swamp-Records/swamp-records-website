import Image from 'next/image';

const currentArtists = [
  {
    name: "Buboy",
    image: "/media/elise-buboy.webp",
    logo: "/graphics/buboy-logo.png",
    genre: "Indie Rock",
    description: "Filipino-American indie rock artist who drinks a lot of milk and goes to the movie theater alone (separate activities, rarely together).",
    link: "https://www.buboymusic.com/home"
  },
  {
    name: "The Nancys",
    image: "/media/hayley-nancys.webp",
    logo: "/graphics/nancys-logo.png",
    genre: "Indie Rock",
    description: "An indie rock band that started with a simple recipe: good friends, great music, and the occasional interruption from their beloved cats.",
    link: "https://thenancysband.com/"
  }
];

// const previousArtists = [
//   {
//     name: "  ",
//     image: "/artists/swamp-cats.jpg",
//     genre: "Blues Rock",
//     year: "2023",
//     description: ""
//   }
// ];

export default function ArtistsPage() {
  return (
    <div className="artists-page">      
      {/* Hero Section */}
      <section className="artists-hero">
        <div className="hero-content">
          <h1>Our Artists</h1>
          {/* <p className="hero-subtitle">Discover the talent that makes Gainesville's music scene thrive</p> */}
        </div>
      </section>

      {/* Current Artists */}
      <section className="current-artists">
        <div className="container">
          <div className="artists-grid">
            {currentArtists.map((artist, index) => (
              <div key={index} className="artist-card current">
                <div className="artist-image">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={400}
                    height={300}
                    className="artist-photo"
                  />
                  {artist.logo && (
                    <div className="artist-logo">
                      <Image
                        src={artist.logo}
                        alt={`${artist.name} logo`}
                        width={190}
                        height={80}
                        className="logo-image"
                      />
                    </div>
                  )}
                </div>
                <div className="artist-info">
                  <h3>{artist.name}</h3>
                  <p className="artist-genre">{artist.genre}</p>
                  <p className="artist-description">{artist.description}</p>
                  <a href={artist.link} target="_blank" className="artist-link">Visit Website</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Artists */}
      {/* <section className="previous-artists">
        <div className="container">
          <h2>Previous Artists</h2>
          <p className="section-intro">
            These incredible artists have been part of the Swamp Records family. 
            Their contributions continue to inspire the Gainesville music scene.
          </p>
          <div className="artists-grid previous">
            {previousArtists.map((artist, index) => (
              <div key={index} className="artist-card previous">
                <div className="artist-image">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={300}
                    height={200}
                    className="artist-photo"
                  />
                  <div className="artist-year">{artist.year}</div>
                </div>
                <div className="artist-info">
                  <h3>{artist.name}</h3>
                  <p className="artist-genre">{artist.genre}</p>
                  <p className="artist-description">{artist.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Join Us Section */}
      <section className="join-section">
        <div className="container">
          <h2 style={{marginBottom: '1rem'}}>Want to Join Our Family?</h2>
          <p>
            Are you a musician or band looking for support in the Gainesville area? 
            We&apos;re always looking for new talent to work with.
          </p>
          <div className="cta-buttons">
            <a href="/campaigns" className="cta-button primary">View Campaigns</a>
            <a href="/contact" className="cta-button secondary">Get In Touch</a>
          </div>
        </div>
      </section>

    </div>
  );
} 