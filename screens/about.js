import React from 'react';
import ThirdCol from './about-screens';
import styles from './styles.module.scss';

const ThirdColumn = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.innerAbout}>
        <ThirdCol />
      </div>
    </div>
  );
};
export default ThirdColumn;
