import React from "react";
import ProfileComponent from "../../info-screens/profile";
import Events from "../../about-screens/events";
import Groups from "../../info-screens/joined_groups";
import Pages from "../../info-screens/likes_pages";
import Suggestion from "../../about-screens/suggestion";

const MobileProfile = () => {
  return (
    <div>
      <ProfileComponent />
      <hr
        style={{
          border: "0.5px solid rgba(193, 193, 193, 0.2)",
          marginTop: "15px",
          marginBottom: "15px",
        }}
      />
      <Events />
      <hr
        style={{
          border: "0.5px solid rgba(193, 193, 193, 0.2)",
          marginTop: "15px",
          marginBottom: "15px",
        }}
      />
      <Groups />
      <hr
        style={{
          border: "0.5px solid rgba(193, 193, 193, 0.2)",
          marginTop: "15px",
          marginBottom: "15px",
        }}
      />
      <Pages />
      <hr
        style={{
          border: "0.05px solid rgba(193, 193, 193, 0.2)",
          marginTop: "15px",
          marginBottom: "15px",
        }}
      />
      <Suggestion />
    </div>
  );
};

export default MobileProfile;
