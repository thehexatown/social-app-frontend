import React from 'react';
import styles from './style.module.scss';

const TopProfile = () => {
  const array = [
    '/menu-img-1.jpg',
    '/menu-img-4.jfif',
    '/menu-img-1.jpg',
    '/menu-img-4.jfif',
    '/menu-img-1.jpg',
    '/menu-img-4.jfif',
    '/menu-img-4.jfif',
    '/menu-img-1.jpg',
    '/menu-img-1.jpg',
    '/menu-img-4.jfif',
    '/menu-img-4.jfif',
    '/menu-img-1.jpg',
    '/menu-img-1.jpg',
    '/menu-img-1.jpg',
    '/menu-img-4.jfif',
    '/menu-img-4.jfif',
    '/menu-img-1.jpg',
  ];

  return (
    <div className={styles.menuBarContainerBottom}>
      <div>
        <div className={styles.menuBoxContainerPlus}>
          <img src="/plus.png" alt="img" width="44px" height="44px" />
        </div>
      </div>
      <div className={styles.scrollParent}>
        {array.map((i) => (
          <div className={styles.menuBoxContainerImages}>
            <img className={styles.menuBoxContainerImage} src={i} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProfile;
