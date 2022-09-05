import React from 'react';
import styles from './style.module.scss';

const PostSomething = () => {
  return (
    <div className={styles.postSomethingContainer}>
      <div className={styles.postSomethingTextContainer}>
        <span className={styles.postSomethingText}>Post Something</span>
      </div>
      <div className={styles.postInputContainer}>
        <img src="/col-3-img.png" alt="img" width="44px" height="44px" />
        <div className={styles.inputContainer}>
          <input
            className={styles.postInput}
            type="text"
            placeholder="what's on your mind marqules ?"
          />
          <img
            className={styles.postImageGallery}
            src="/image-gallery.svg"
            alt="img"
            width="27px"
            height="27px"
          />
        </div>
      </div>
    </div>
  );
};

export default PostSomething;
