import React from "react";
import Search from "./search";
import Profile from "./profile";
import Groups from "./joined_groups";
import Pages from "./likes_pages";
import SuggestedPages from "./suggested_pages";

const FirstCol = () => {
  return (
    <div>
      <Search />
      <Profile />
      <Groups />
      <Pages />
      <SuggestedPages />
    </div>
  );
};

export default FirstCol;
