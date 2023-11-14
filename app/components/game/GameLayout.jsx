import React from "react";
import { GoalBoard, BirdDeck, BonusDeck, BirdTray, BirdFeeder } from "./board";

import { PlayerBoard } from "./player";

const GameLayout = () => {
  return (
    <div>
      <div className="flex gap-10">
        <BirdDeck />
        <BonusDeck />
      </div>

      <BirdTray />
      <BirdFeeder />
      <PlayerBoard />
    </div>
  );
};

export default GameLayout;
