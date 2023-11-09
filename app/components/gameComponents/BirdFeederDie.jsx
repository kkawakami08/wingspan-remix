import React from "react";
import { useAtom } from "jotai";
import {
  birdFeederAtom,
  playerFoodSupplyAtom,
  disableRollingAtom,
} from "../../utils/jotaiStore";
import {
  takeDie,
  enableRolling,
} from "../../utils/gameFunctions/birdFeederFunctions";

const BirdFeederDie = ({ foodType }) => {
  const [birdFeeder] = useAtom(birdFeederAtom);
  const [, setPlayerFoodSupply] = useAtom(playerFoodSupplyAtom);
  const [, setDisableRolling] = useAtom(disableRollingAtom);

  return (
    <div
      className="border-2 border-slate-900 rounded-full px-5 py-3 bg-teal-400"
      onClick={() =>
        takeDie(birdFeeder, setPlayerFoodSupply, foodType.id, setDisableRolling)
      }
    >
      {foodType.type}
    </div>
  );
};

export default BirdFeederDie;
