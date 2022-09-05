import React from "react";
import styles from "./style.module.scss";

const PlayingButons = ({ text, image, index }) => {
  return (
    <div data-index={index} className={styles.trendingButton}>
      <span className={styles.trendingColor}>{text}</span>
      <img className={styles.trendingIcon} src={image} alt="img" />
    </div>
  );
};

export default PlayingButons;
