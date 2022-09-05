import React from 'react';
import PostsScreens from './home-screens';
import styles from './styles.module.scss';

const SecondColumn = ({
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
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.innerHome}>
        <PostsScreens
          state={state}
          setstate={setstate}
          friends={friends}
          setFriends={setFriends}
          calender={calender}
          setCalender={setCalender}
          gallery={gallery}
          setGallery={setGallery}
          playButton={playButton}
          setPlayButton={setPlayButton}
          networkMain={networkMain}
          setNetworkMain={setNetworkMain}
        />
      </div>
    </div>
  );
};
export default SecondColumn;
