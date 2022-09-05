import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import styles from "./style.module.scss";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const NavIcons = ({
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
  const router = useRouter();

  const showButon = () => {
    if (window.innerWidth <= 850) {
      setProfile(true);
      setMenu(false);
      setNetwork(false);
      setstate(false);
      setFriends(false);
      setCalender(false);
      setGallery(false);
      setPlayButton(false);
      setNetworkMain(false);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.navIconsWrapper}>
      <div className={styles.bellIcon}>
        <img src="/bell.svg" alt="img" />
      </div>
      <div className={styles.settingIcon}>
        <img src="/setting.svg" alt="img" />
      </div>

      <Dropdown isOpen={isOpen} toggle={toggleHandler}>
        <DropdownToggle className={styles.profileDropdown}>
          <div className={styles.profileDropdown}>
            <img
              onClick={() => showButon()}
              className={profile ? styles.select : styles.profileImageIcon}
              src="/col-3-img.png"
              alt="img"
              width="33px"
              height="33px"
            />
            <img className={styles.downArrow} src="/down-arrow.svg" alt="img" />
          </div>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>View Profile</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem onClick={() => router.push("/login")}>
            Log out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
