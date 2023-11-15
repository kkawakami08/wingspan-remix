import React from "react";
import { useAtom } from "jotai";
import {
  birdFeederAtom,
  playerFoodSupplyAtom,
  disableRollingAtom,
  selectedFoodAtom,
  disableDieSelectionAtom,
} from "../../utils/jotaiStore";

import { foodSelection } from "../../utils/gameFunctions/generalFunctions";

const BirdFeederDie = ({ foodType, selected }) => {
  const [birdFeeder, setBirdFeeder] = useAtom(birdFeederAtom);
  const [, setPlayerFoodSupply] = useAtom(playerFoodSupplyAtom);

  const [selectedFood, setSelectedFood] = useAtom(selectedFoodAtom);
  const [disableDie] = useAtom(disableDieSelectionAtom);

  const selectDie = () => {
    if (selected) {
      foodSelection(selectedFood, setBirdFeeder, foodType.id);
    } else {
      foodSelection(birdFeeder, setSelectedFood, foodType.id);
    }
  };

  return (
    <button
      className="border-2 border-slate-900 rounded-full px-5 py-3 bg-teal-400 disabled:text-white"
      onClick={selectDie}
      disabled={disableDie}
    >
      {foodType.type}
    </button>
  );
};

export default BirdFeederDie;
