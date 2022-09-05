import React from "react";
import TopMenu from "../home-screens/menu_bar";
import TopProfile from "../home-screens/profile_bar";
import PostSomething from "../home-screens/create_post";
import PostOne from "../home-screens/posts";
import MobileProfile from "./info";
import MobileNetwork from "./networks";

const SecondColMobile = ({
  menu,
  setMenu,
  profile,
  setProfile,
  network,
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
  const postData = [
    {
      id: 1,
      profileImg: "/images/col-3-img.png",
      profileName: "Luis Shawn",
      time: "3rd jun at 10:53 pm",
      favouritePlace:
        "One of the best place i heaven ever seen. Turkey is my favourite place now",
      img: ["/images/post-1.svg", "/images/post-2.svg", "/images/post-3.svg"],
      like: false,
      dropDown: false,
    },
    {
      id: 2,
      profileImg: "/images/col-3-img.png",
      profileName: "Prachi Desoi",
      time: "3rd jun at 10:53 pm",
      favouritePlace: "Summer Vacation 2021..",
      img: ["/images/post-1.svg", "/images/post-2.svg", "/images/post-3.svg"],
      like: false,
      dropDown: false,
    },
    {
      id: 3,
      profileImg: "/images/col-3-img.png",
      profileName: "Paul Wesley",
      time: "3rd jun at 10:53 pm",
      favouritePlace:
        "One of the best place i heaven ever seen. Turkey is my favourite place now",
      img: ["/images/video.mp4"],
      like: false,
      dropDown: false,
    },
    {
      id: 4,
      profileImg: "/images/col-3-img.png",
      profileName: "Prachi Desoi",
      time: "3rd jun at 10:53 pm",
      favouritePlace:
        "One of the best place i heaven ever seen. Turkey is my favourite place now",
      img: ["/images/post-1.svg", "/images/post-2.svg", "/images/post-3.svg"],
      like: false,
      dropDown: false,
    },
  ];
  return (
    <div>
      <TopMenu
        state={state}
        setstate={setstate}
        menu={menu}
        network={network}
        setMenu={setMenu}
        setProfile={setProfile}
        setNetwork={setNetwork}
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
      {menu ? (
        <div>
          <TopProfile />
          <div style={{ padding: "1%" }}>
            <PostSomething />
            <PostOne postData={postData} />
          </div>
        </div>
      ) : profile ? (
        <div style={{ padding: "2%" }}>
          <MobileProfile />
        </div>
      ) : network ? (
        <div style={{ padding: "2%" }}>
          <MobileNetwork />
        </div>
      ) : null}
    </div>
  );
};

export default SecondColMobile;
