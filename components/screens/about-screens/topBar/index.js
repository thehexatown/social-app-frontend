import React from "react";
import { NavIcons } from "./nav_icons";
import styles from "./style.module.scss";

const TopBar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.profileHolederName}>Elenia Marqules</div>
      <NavIcons />
    </div>
  );
};

export default TopBar;
