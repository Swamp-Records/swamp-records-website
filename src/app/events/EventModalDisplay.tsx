'use client';

import styles from './events.module.css'
import type { EventObj } from '@/notionDB/eventParser'

export default function EventModal({event, onClose,} : {event: EventObj; onClose: () => void;}) {
    return (
        <div className={styles['event-modal-overlay']} onClick={onClose}>

          <div className={styles['event-modal']} onClick={(e) => e.stopPropagation()}>

            {/*display event name*/}
            <h3 className={styles['modal-event-name']}>{event.name}</h3>

            {/*display event content*/}
            <div className={styles['modal-content']}>

              {/*display event poster img*/}
              <img
                src={event.imageUrl}
                alt={event.name}
                className={styles['modal-image']}
              />

              {/*display event general info (date, time, location, addt. info, tickets)*/}
              <div className={styles['modal-event-details']}>
                <p className={styles['modal-event-date']}>DATE: { new Date(event.date + 'T00:00:00').toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric',})}</p>
                <p className={styles['modal-event-date']}>TIME: {event.time}</p>
                <p className={styles['modal-event-location']}>OUR ARTIST(S) INVOLVED: {event.artists}</p>
                <p className={styles['modal-event-location']}>LOCATION: {event.location}</p>

                {/*display additional info*/}
                <p className={styles['modal-event-description']}>{event.description}</p>

                {/*Only display the 'Get Tickets' button if there is a link to buy tickets*/}
                {event.ticketLink != "" ? <a href={event.ticketLink} className={styles['modal-event-button']}>Get Tickets</a> : <p className={styles['modal-event-ticket']}>Tickets are purchased at the door.</p>}
              </div>

            </div>

          </div>
        </div>
    );
}