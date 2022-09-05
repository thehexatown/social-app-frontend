import React from "react";
import Search from "../../info-screens/search";
import { NavIcons } from "../../about-screens/topBar/nav_icons";
import styles from "./style.module.scss";

const MobileNav = ({
  profile,
  setProfile,
  setNetwork,
  setMenu,
  setstate,
  setFriends,
  setCalender,
  setGallery,
  setPlayButton,
  setNetworkMain,
}) => {
  return (
    <div className={styles.navParent}>
      <div className={styles.mobileSearch}>
        <Search />
      </div>
      <div className={styles.mobileContent}>
        <NavIcons
          profile={profile}
          setMenu={setMenu}
          setProfile={(val) => setProfile(val)}
          setNetwork={setNetwork}
          setstate={setstate}
          setFriends={setFriends}
          setCalender={setCalender}
          setGallery={setGallery}
          setPlayButton={setPlayButton}
          setNetworkMain={setNetworkMain}
        />
      </div>
    </div>
  );
};

export default MobileNav;
