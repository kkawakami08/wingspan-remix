import React from "react";
import { GoalBoard, BirdDeck, BonusDeck, BirdTray } from "./board";
import { PlayerBoard } from "./player";

const GameLayout = () => {
  return (
    <div>
      <p>Game Layout</p>
      {/* <BirdDeck /> */}
      <BirdTray />
      <PlayerBoard />
      {/* <BonusDeck /> */}
    </div>
  );
};

export default GameLayout;
