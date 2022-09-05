import React from 'react';
import CollectionHeading from '../collection_heading';
import styles from './styles.module.scss';

const Collection = ({ heading, data, seeAll, isDropdown }) => {
  return (
    <div className={styles.collectionDetailWrapper}>
      <CollectionHeading heading={heading} isDropdown={isDropdown} />
      <div className={styles.collectionWrapper}>
        {data.map((i, index) => (
          <div className={styles.CollectionGroupRow}>
            <div className={styles.collectionRow}>
              <img
                className={styles.listImage}
                src="/groups-icons.svg"
                alt="img"
              />
              <p className={styles.listImageText}>{i.name}</p>
            </div>

            {i.rating && (
              <div className={styles.rating}>
                <p className={styles.ratingPlus}>120+</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {seeAll && (
        <div className={styles.seeAll}>
          <span className={styles.seeAllText}>SEE ALL</span>
        </div>
      )}
    </div>
  );
};

export default Collection;
