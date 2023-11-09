import React from "react";
import { useAtom } from "jotai";
import {
  birdFeederAtom,
  playerFoodSupplyAtom,
  wingspanStore,
} from "../../utils/jotaiStore";

const BirdFeederDice = ({ foodType }) => {
  const [birdFeeder, setBirdFeeder] = useAtom(birdFeederAtom);
  const [playerFoodSupply, setPlayerFoodSupply] = useAtom(playerFoodSupplyAtom);

  const takeDie = (diceId) => {
    let initialSupply = birdFeeder;

    const index = initialSupply.map((e) => e.id).indexOf(diceId);
    const [die] = initialSupply.splice(index, 1);

    setPlayerFoodSupply((prev) => [...prev, die]);
  };

  return (
    <div
      className="border-2 border-slate-900 rounded-full px-5 py-3 bg-teal-400"
      onClick={() => takeDie(foodType.id)}
    >
      {foodType.type} {foodType.id}
    </div>
  );
};

export default BirdFeederDice;
