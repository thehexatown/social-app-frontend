import React from "react";
import TopBar from "./topBar";
import Events from "./events";
import Suggestion from "./suggestion";
import TrendingGames from "./trending_games";
import Live from "./live";

const ThirdCol = () => {
  return (
    <div>
      <TopBar />
      <Events />
      <Suggestion />
      <TrendingGames />
      <Live />
    </div>
  );
};

export default ThirdCol;
