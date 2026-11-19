'use client';

import { useState } from 'react';
import styles from './events.module.css';
import EventModal from './EventModalDisplay';
import type { EventObj } from '@/notionDB/eventParser';

export default function UpcomingEvents( {events,} : {events: EventObj[];} ) {

  //state to manage the selected event for the info pop-up modal
  const [selectedEvent, setSelectedEvent] = useState<EventObj | null>(null);


  return (
    <>
      <section className={styles['more-upcoming-events']}>
          <div className={styles['container']}>

            <h2 className={styles['upcoming-events-title']}>More Upcoming Events</h2>

            <div className={styles['upcoming-carousel']}>
              {events.map((event) => (
                <div
                  key={event.id}
                  className={styles['carousel-event']}
                  onClick={() => setSelectedEvent(event)}
                >
                  <img
                    src={event.imageUrl}
                    alt={event.name}
                    className={styles['carousel-event-image']}
                  />

                  <h3>{event.name}</h3>
                </div>
              ))}
            </div>

          </div>
        </section>

      {/*only displays event info if the event is selected*/}
      {selectedEvent && (<EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)}/>)}
    </>
  );
}