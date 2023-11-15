import React from "react";
import { GoalBoard, BirdDeck, BonusDeck, BirdTray, BirdFeeder } from "./board";

import { PlayerBoard } from "./player";

const GameLayout = () => {
  return (
    <div className="flex flex-col gap-5">
      <PlayerBoard />
      <BirdFeeder />
      {/* <div className="flex gap-10">
        <BirdDeck />
        <BonusDeck />
      </div>

      <BirdTray /> */}
    </div>
  );
};

export default GameLayout;
