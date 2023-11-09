import React from "react";
import { useAtom } from "jotai";
import { birdFeederAtom, disableRollingAtom } from "../../utils/jotaiStore";
import { BirdFeederDie } from ".";
import {
  enableRolling,
  rollBirdFeeder,
} from "../../utils/gameFunctions/birdFeederFunctions";

const BirdFeeder = () => {
  const [birdFeeder, setBirdFeeder] = useAtom(birdFeederAtom);
  const [disableRolling, setDisableRolling] = useAtom(disableRollingAtom);

  const birdFeederContent = birdFeeder.map((item) => (
    <BirdFeederDie foodType={item} key={item.id} />
  ));
  enableRolling(birdFeeder, setDisableRolling);

  const rollDice = () => {
    const newRoll = rollBirdFeeder();
    setBirdFeeder(newRoll);

    enableRolling(newRoll, setDisableRolling);
  };

  return (
    <div>
      <p>Bird Feeder</p>
      <div className="flex gap-3 flex-wrap">{birdFeederContent}</div>
      <button
        className="p-1 border-2 border-slate-600 rounded-lg disabled:bg-red-500 disabled:text-slate-400"
        disabled={!disableRolling}
        onClick={() => rollDice()}
      >
        Roll Dice
      </button>
    </div>
  );
};

export default BirdFeeder;
