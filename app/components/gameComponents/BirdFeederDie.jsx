import React from "react";
import { useAtom } from "jotai";
import {
  birdFeederAtom,
  disableRollingAtom,
  selectedFoodAtom,
  disableDieSelectionAtom,
  testForestAtom,
  testForestBirdCountAtom,
  additionalItemAtom,
} from "../../utils/jotaiStore";
import { enableRolling } from "../../utils/gameFunctions/birdFeederFunctions";

import { foodSelection } from "../../utils/gameFunctions/generalFunctions";

const BirdFeederDie = ({ foodType, selected, diceQuantity }) => {
  const [birdFeeder, setBirdFeeder] = useAtom(birdFeederAtom);
  const [forest] = useAtom(testForestAtom);
  const [forestBirdCount] = useAtom(testForestBirdCountAtom);
  const [additionalItem] = useAtom(additionalItemAtom);
  const [selectedFood, setSelectedFood] = useAtom(selectedFoodAtom);
  const [disableDie] = useAtom(disableDieSelectionAtom);
  const [, setDisableRolling] = useAtom(disableRollingAtom);

  const quantity = forest[forestBirdCount].action.quantity + additionalItem;

  const selectDie = () => {
    if (selected) {
      foodSelection(selectedFood, setBirdFeeder, foodType.id);

      if (quantity > selectedFood.length + 1)
        enableRolling(birdFeeder, setDisableRolling);
    } else {
      foodSelection(birdFeeder, setSelectedFood, foodType.id);

      if (quantity > selectedFood.length + 1)
        enableRolling(birdFeeder, setDisableRolling);
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
