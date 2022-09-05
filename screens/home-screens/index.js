import React from 'react';
import TopMenu from './menu_bar';
import TopProfile from './profile_bar';
import PostSomething from './create_post';
import PostOne from './posts';
import { PostData } from '../../components/Data';

const SecondCol = ({
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
    <div>
      <TopMenu
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
      <TopProfile />
      <PostSomething />
      <PostOne postData={PostData} />
    </div>
  );
};

export default SecondCol;
