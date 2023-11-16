import React from "react";
import {
  GoalBoard,
  BirdDeck,
  BonusDeck,
  BirdTray,
  BirdFeeder,
  BirdSelection,
  BirdFeederSelection,
} from "./board";

import { PlayerBoard } from "./player";

const GameLayout = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* <BirdTray /> */}
      <BirdSelection />
      <PlayerBoard />
      <BirdFeeder />
      <BirdFeederSelection />
      {/* <div className="flex gap-10">
        <BirdDeck />
        <BonusDeck />
      </div> */}
    </div>
  );
};

export default GameLayout;
