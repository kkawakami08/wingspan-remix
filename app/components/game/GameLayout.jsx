import React from "react";
import { GoalBoard, BirdDeck, BonusDeck } from "./board";
import { PlayerBoard } from "./player";

const GameLayout = () => {
  return (
    <div>
      <p>Game Layout</p>
      <BirdDeck />
      <PlayerBoard />
      <BonusDeck />
    </div>
  );
};

export default GameLayout;
