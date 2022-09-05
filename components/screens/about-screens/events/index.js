import React from 'react';
import CollectionHeading from '../../../collection_heading';
import styles from './style.module.scss';

const events = [
  {
    icon: '/birthday-invitation.svg',
    event: 'Alexa Birthday Invitation',
  },
  { icon: '/events-invite.svg', event: '5 Events Invite' },
];

const Events = () => {
  return (
    <div className={styles.eventsBox}>
      <CollectionHeading heading={'Events'} isDropdown={true} />
      <div className={styles.eventsCollectionRow}>
        {events.map((i, index) => (
          <div className={styles.eventsRow}>
            <div className={styles.groupRow}>
              <img className={styles.eventsImage} src={i.icon} alt="img" />
              <span className={styles.eventsName}>{i.event}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
