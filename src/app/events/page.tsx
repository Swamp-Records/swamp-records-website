import { getEvents } from '@/notionDB/notion';
import styles from './events.module.css';
import FeaturedEvents from './FeaturedEvents';
import UpcomingEvents from './UpcomingEvents';
import PastEvents from './PastEvents';

//ensures Notion data is fresh everytime page is reloaded
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function EventsPage() {
  // Fetch events from Notion database 
  const events = await getEvents();

  // Get today's date in YYYY-MM-DD format
  const today = new Date();
  const currDate = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');

  //divide AND sort the events into upcoming and past based on current date
  const upcomingEvents = events.filter((event) => event.date >= currDate).sort((a, b) => a.date.localeCompare(b.date));
  const featuredUpcoming = upcomingEvents.slice(0,4); //first four upcoming events will be featured on tacks
  const extraUpcoming = upcomingEvents.slice(4); //the rest of the upcoming events will be displayed in a carausel below the featured events

  const pastEvents = events.filter((event) => event.date < currDate).sort((a, b) => b.date.localeCompare(a.date)); //past events will be displayed in a grid under the upcoming events section
  
  return (
    <div className={styles['events-page']}>
      
      {/* Hero Section */}
      <section className={styles['events-hero']}>
        <div className={styles['hero-content']}>
          <h1>EVENTS</h1>
          <p className={styles['hero-subtitle']}>Live music, unforgettable experiences, and the best of Gainesville&apos;s music scene <br/>
            Click each poster to get more information about our Upcoming Events! 
          </p>
        </div>
      </section>

      {/* Upcoming Featured Events */}
      <section className={styles['upcoming-events']}>
        <div className={styles['container']}>

          <FeaturedEvents events={featuredUpcoming}/>
          
        </div>
      </section>


      {/* ADDITIONAL Upcoming Events Carousel - this section only shows up if there's more than 4 upcoming events */}
      {extraUpcoming.length > 0 && (<UpcomingEvents events={extraUpcoming}/>)}


      {/* Past Events */}
      <PastEvents events={pastEvents}/>

    </div>
  );
} 