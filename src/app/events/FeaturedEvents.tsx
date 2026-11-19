'use client';

import { useState } from 'react';
import styles from './events.module.css';
import EventModal from './EventModalDisplay';
import type { EventObj } from '@/notionDB/eventParser';

export default function FeaturedEvents( {events,} : {events: EventObj[];} ) {

  //state to manage the selected event for the info pop-up modal
  const [selectedEvent, setSelectedEvent] = useState<EventObj | null>(null);


  return (
    <>
      {/*Display featured events*/}
      <div className={`${styles['poster-board']} ${styles[`count-${events.length}`]}`}>

        {/* generate event cards by mapping through the events array */}
        {events.map((event, index) => (
          <div
            key={event.id}
            /*if there's one event, it will be centered on the page, otherwise (2-4 events) it will be displayed using a scattered pattern*/
            className={events.length === 1 ? styles['poster'] : `${styles['poster']} ${styles[`poster-${index % 4}`]}`}
            onClick={() => setSelectedEvent(event)}
          >

            {/* thumbtack */}
            <img
              src={`/graphics/thumbtack${(index % 4) + 1}.png`}
              alt=""
              className={styles['thumbtack']}
            />

            {/*display the event poster image*/}
            <img src={event.imageUrl} alt={event.name} className={styles['poster-image']}/>

          </div>
        ))}

      </div>

      {/*only displays event info if the event is selected*/}
      {selectedEvent && (<EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)}/>)}
    </>
  );
}