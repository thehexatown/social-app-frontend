import React from 'react';
import styles from './style.module.scss';

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileBox}>
        <div>
          <img
            className={styles.profileBoxImage}
            src="/col-3-img.png"
            alt="img"
          />
        </div>
        <div className={styles.profileNameBox}>
          <span className={styles.heading}>Elenia Marqules</span>
          <br />
          <button type="button" className={styles.viewProfileButton}>
            View My Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
