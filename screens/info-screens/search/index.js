import React from 'react';
import styles from './style.module.scss';

const InfoSearch = () => {
  return (
    <div className={styles.searchBoxWrapper}>
      <img className={styles.hexonImage} src="/Hexon.svg" alt="img" />
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search"
          name="search"
        />
        <img src="/search.svg" alt="img" />
      </div>
    </div>
  );
};

export default InfoSearch;
