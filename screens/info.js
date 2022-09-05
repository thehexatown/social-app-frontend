import React, { useState } from 'react';
import Info from './info-screens';
import styles from './styles.module.scss';

const FirstColumn = () => {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.innerFirstCol}>
        <Info />
      </div>
    </div>
  );
};
export default FirstColumn;
