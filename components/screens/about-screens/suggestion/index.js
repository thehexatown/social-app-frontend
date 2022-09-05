import React, { useState } from 'react';
import styles from './style.module.scss';
import CollectionHeading from '../../../collection_heading';

const Suggestion = () => {
  const [suggestionData, setSuggestionData] = useState([
    {
      heading: 'Dr.Philips',
      subHeading: '@dr.philips',
      isFollow: true,
    },
    {
      heading: 'Faseeh',
      subHeading: '@.faseeh',
      isFollow: true,
    },
    {
      heading: 'Luis Fonsi',
      subHeading: '@luis.fonsi',
      isFollow: true,
    },
    {
      heading: 'Zayn Malik',
      subHeading: '@zayin.malik',
      isFollow: true,
    },
  ]);

  const handleChange = (i) => {
    const dummyArray = suggestionData.map((d, index) =>
      index === i ? { ...d, isFollow: !d.isFollow } : d
    );
    setSuggestionData(dummyArray);
  };

  return (
    <div className={styles.suggestionBox}>
      <CollectionHeading
        heading={'Suggestion for You'}
        text={'See All'}
        isDropdown={false}
      />
      <div className={styles.suggestionCollectionRow}>
        {suggestionData.map((i, index) => (
          <div className={styles.suggestionRow}>
            <div className={styles.suggestionRow}>
              <div>
                <img
                  className={styles.suggestionImage}
                  src="/suggestion-img.png"
                  alt="img"
                />
              </div>
              <div className={styles.drName}>
                <span className={styles.Dr}>{i.heading}</span>
                <span className={styles.dr}>{i.subHeading}</span>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleChange(index)}
                type="button"
                className={
                  i.isFollow
                    ? styles.suggestionButton
                    : styles.suggestionButtonSelect
                }
              >
                {i.isFollow ? 'Follow' : 'Followed'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestion;
