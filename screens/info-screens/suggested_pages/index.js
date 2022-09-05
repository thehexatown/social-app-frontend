import React, { useState, useEffect, useRef } from 'react';
import CollectionHeading from '../../../components/collection_heading';
import styles from './style.module.scss';

const SuggestedPages = () => {
  return (
    <div className={styles.suggestedPagesBox}>
      <CollectionHeading heading={'Suggested Pages'} isDropdown={true} />
      <div className={styles.suggestedImage}>
        <img src="/suggested_pages.png" alt="img" width="100%" />
      </div>
      <div className={styles.dasDesign}>
        <span className={styles.dasDesignText}>DAS Design Studio</span>
      </div>
    </div>
  );
};

export default SuggestedPages;
