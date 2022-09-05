import React, { useState } from "react";
import Info from "./info";
import Home from "./home";
import About from "./about";
import MobileNav from "./mobile-view/navbar";
import SecondColMobile from "./mobile-view/home";
import styles from "./styles.module.scss";

const SocialApp = () => {
  const [state, setstate] = useState(true);
  const [friends, setFriends] = useState(false);
  const [calender, setCalender] = useState(false);
  const [playButton, setPlayButton] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [networkMain, setNetworkMain] = useState(false);
  const [menu, setMenu] = useState(true);
  const [network, setNetwork] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <div className={styles.parent}>
      {/* Web View*/}
      <div className={styles.webView}>
        <Info />
        <Home
          state={state}
          setstate={() => {
            setstate(true);
            setMenu(true);
            setFriends(false);
            setCalender(false);
            setGallery(false);
            setPlayButton(false);
            setNetworkMain(false);
          }}
          friends={friends}
          setFriends={() => {
            console.log("fr");
            setstate(false);
            setFriends(true);
            setCalender(false);
            setGallery(false);
            setPlayButton(false);
            setNetworkMain(false);
            setNetwork(false);
          }}
          calender={calender}
          setCalender={() => {
            setstate(false);
            setFriends(false);
            setCalender(true);
            setGallery(false);
            setPlayButton(false);
            setNetworkMain(false);
          }}
          gallery={gallery}
          setGallery={() => {
            setstate(false);
            setFriends(false);
            setCalender(false);
            setGallery(true);
            setPlayButton(false);
            setNetworkMain(false);
          }}
          playButton={playButton}
          setPlayButton={() => {
            setstate(false);
            setFriends(false);
            setCalender(false);
            setGallery(false);
            setPlayButton(true);
            setNetworkMain(false);
          }}
          networkMain={networkMain}
          setNetworkMain={() => {
            console.log("net");
            setstate(false);
            setFriends(false);
            setCalender(false);
            setGallery(false);
            setPlayButton(false);
            setNetworkMain(true);
            setNetwork(true);
          }}
        />
        <About />
      </div>
      {/* Mobile View */}
      <div className={styles.mobileView}>
        <div>
          <MobileNav
            profile={profile}
            setstate={setstate}
            setMenu={setMenu}
            setProfile={(val) => setProfile(val)}
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
        </div>
        <div className={styles.mobileContent}>
          <div className={styles.mobileContentAlign}>
            <SecondColMobile
              state={state}
              setstate={() => {
                setstate(true);
                setMenu(true);
                setFriends(false);
                setCalender(false);
                setGallery(false);
                setPlayButton(false);
                setNetworkMain(false);
              }}
              menu={menu}
              setMenu={() => {
                setstate(true);
                setMenu(true);
                setProfile(false);
                setFriends(false);
                setCalender(false);
                setGallery(false);
                setPlayButton(false);
                setNetworkMain(false);
              }}
              network={network}
              setNetwork={() => {
                console.log("net");
                setstate(false);
                setMenu(false);
                setProfile(false);
                setFriends(false);
                setCalender(false);
                setGallery(false);
                setPlayButton(false);
                setNetworkMain(true);
                setNetwork(true);
              }}
              profile={profile}
              setProfile={setProfile}
              friends={friends}
              setFriends={() => {
                console.log("fr");
                setstate(false);
                setFriends(true);
                setCalender(false);
                setGallery(false);
                setPlayButton(false);
                setNetworkMain(false);
              }}
              calender={calender}
              setCalender={() => {
                setstate(false);
                setFriends(false);
                setCalender(true);
                setGallery(false);
                setPlayButton(false);
                setNetworkMain(false);
              }}
              gallery={gallery}
              setGallery={() => {
                setstate(false);
                setFriends(false);
                setCalender(false);
                setGallery(true);
                setPlayButton(false);
                setNetworkMain(false);
              }}
              playButton={playButton}
              setPlayButton={() => {
                setstate(false);
                setFriends(false);
                setCalender(false);
                setGallery(false);
                setPlayButton(true);
                setNetworkMain(false);
              }}
              networkMain={networkMain}
              setNetworkMain={() => {
                console.log("net");
                setstate(false);
                setFriends(false);
                setCalender(false);
                setGallery(false);
                setPlayButton(false);
                setNetworkMain(true);
                setNetwork(true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialApp;
