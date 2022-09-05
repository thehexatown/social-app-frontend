import React from 'react';
import styles from './style.module.scss';

const TopMenu = ({
  menu,
  network,
  setMenu,
  setProfile,
  setNetwork,
  state,
  setstate,
  friends,
  setFriends,
  calender,
  setCalender,
  setGallery,
  gallery,
  playButton,
  setPlayButton,
  networkMain,
  setNetworkMain,
}) => {
  const Menu = (a) => {
    if (a === 'menu' && window.innerWidth > 850) {
      setstate();
    }
    if (a === 'menu' && window.innerWidth <= 850) {
      setMenu(true);
    }
  };
  const friend = () => {
    setFriends();
  };
  const calander = () => {
    setCalender();
  };
  const playButtonHandler = () => {
    setPlayButton();
  };
  const handleGallery = () => {
    setGallery();
  };
  const handleNetwork = (a) => {
    if (a === 'network' && window.innerWidth > 850) {
      setNetworkMain();
    }
    if (a === 'network' && window.innerWidth <= 850) {
      console.log('netw');
      setNetwork();
    }
  };

  return (
    <div className={styles.menuBarContainer}>
      <div className={styles.menuBarContainerIconBox}>
        <div className={styles.menuBarContainerBox}></div>
        <div className={styles.menuBarContainerBoxI}>
          <img
            onClick={() => Menu('menu')}
            className={styles.menuIcons}
            src="/menu.svg"
            alt="img"
          />
        </div>
        <div className={styles.menuBarContainerBoxBottom}>
          <div className={state ? styles.menuLine : null}></div>
        </div>
      </div>
      <div className={styles.menuBarContainerIconBox}>
        <div className={styles.menuBarContainerBox}></div>
        <div className={styles.menuBarContainerBoxI}>
          <img
            onClick={friend}
            className={styles.menuIcons}
            src="/friends.svg"
            alt="img"
          />
        </div>
        <div className={styles.menuBarContainerBoxBottom}>
          <div className={friends ? styles.menuLine : null}></div>
        </div>
      </div>
      <div className={styles.menuBarContainerIconBox}>
        <div className={styles.menuBarContainerBox}></div>
        <div className={styles.menuBarContainerBoxI}>
          <img
            onClick={calander}
            className={styles.menuIcons}
            src="/calendar.svg"
            alt="img"
          />
        </div>
        <div className={styles.menuBarContainerBoxBottom}>
          <div className={calender ? styles.menuLine : null}></div>
        </div>
      </div>
      <div className={styles.menuBarContainerIconBox}>
        <div className={styles.menuBarContainerBox}></div>
        <div className={styles.menuBarContainerBoxI}>
          <img
            onClick={playButtonHandler}
            className={styles.menuIcons}
            src="/play-button.svg"
            alt="img"
          />
        </div>
        <div className={styles.menuBarContainerBoxBottom}>
          <div className={playButton ? styles.menuLine : null}></div>
        </div>
      </div>
      <div className={styles.menuBarContainerIconBox}>
        <div className={styles.menuBarContainerBox}></div>
        <div className={styles.menuBarContainerBoxI}>
          <img
            onClick={handleGallery}
            className={styles.menuIcons}
            src="/gallery.svg"
            alt="img"
          />
        </div>
        <div className={styles.menuBarContainerBoxBottom}>
          <div className={gallery ? styles.menuLine : null}></div>
        </div>
      </div>
      <div className={styles.menuBarContainerIconBox}>
        <div className={styles.menuBarContainerBox}></div>
        <div className={styles.menuBarContainerBoxI}>
          <img
            onClick={() => handleNetwork('network')}
            className={styles.menuBarIcons}
            src="/network.svg"
            alt="img"
          />
        </div>
        <div className={styles.menuBarContainerBoxBottom}>
          <div className={networkMain ? styles.menuLine : null}></div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
