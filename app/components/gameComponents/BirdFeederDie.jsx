import React from "react";
import { useAtom } from "jotai";
import {
  birdFeederAtom,
  playerFoodSupplyAtom,
  disableRollingAtom,
  selectedFoodAtom,
} from "../../utils/jotaiStore";
import { enableRolling } from "../../utils/gameFunctions/birdFeederFunctions";
import { foodSelection } from "../../utils/gameFunctions/generalFunctions";

const BirdFeederDie = ({ foodType, selected }) => {
  const [birdFeeder, setBirdFeeder] = useAtom(birdFeederAtom);
  const [, setPlayerFoodSupply] = useAtom(playerFoodSupplyAtom);
  const [, setDisableRolling] = useAtom(disableRollingAtom);
  const [selectedFood, setSelectedFood] = useAtom(selectedFoodAtom);

  const selectDie = () => {
    if (selected) {
      foodSelection(selectedFood, setBirdFeeder, foodType.id);
      enableRolling(birdFeeder, setDisableRolling);
    } else {
      // takeDie(birdFeeder, setSelectedFood, foodType.id, setDisableRolling);
      foodSelection(birdFeeder, setSelectedFood, foodType.id);
      enableRolling(birdFeeder, setDisableRolling);
    }
  };

  return (
    <div
      className="border-2 border-slate-900 rounded-full px-5 py-3 bg-teal-400"
      onClick={selectDie}
    >
      {foodType.type}
    </div>
  );
};

export default BirdFeederDie;
