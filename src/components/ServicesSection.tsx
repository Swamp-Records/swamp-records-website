import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBullhorn, 
  faCalendarAlt, 
  faUsers, 
  faMusic 
} from '@fortawesome/free-solid-svg-icons';

export default function ServicesSection() {
  const services = [
    {
      icon: faBullhorn,
      title: "Marketing & PR",
      description: "Comprehensive marketing strategies and public relations services to help artists build their brand and reach new audiences."
    },
    {
      icon: faCalendarAlt,
      title: "Booking & Events",
      description: "Professional booking services for concerts, festivals, and special events throughout the Gainesville area."
    },
    {
      icon: faUsers,
      title: "Artist Development",
      description: "Supporting emerging artists with resources, connections, and guidance to help them grow their careers."
    },
    {
      icon: faMusic,
      title: "Music Industry Experience",
      description: "Hands-on learning opportunities for UF students pursuing careers in the music industry."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 