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
        <section className={styles['past-events']}>
            <div className={styles['container']}>
                <h2 className={styles['past-events-title']}>Past Events</h2>
                
                <div className={styles['past-events-grid']}>
                    {events.map((event) => (
                    <div
                        key={event.id}
                        className={styles['past-event']}
                        onClick={() => setSelectedEvent(event)}
                    >
                        <img
                        src={event.imageUrl}
                        alt={event.name}
                        className={styles['past-event-image']}
                        />
                    </div>
                    ))}
                </div>
            </div>
        </section>

      {selectedEvent && (<EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)}/>)}
    </>
  );}