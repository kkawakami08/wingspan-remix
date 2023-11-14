import React from "react";
import {
  PlayerBirdHand,
  PlayerBonusHand,
  PlayerFoodSupply,
  PlayerMat,
} from "./";

const PlayerBoard = () => {
  return (
    <div>
      <PlayerBirdHand />
      {/* <PlayerBonusHand /> */}
      <PlayerFoodSupply />
      <PlayerMat />
    </div>
  );
};

export default PlayerBoard;
