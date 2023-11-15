import React from "react";
import { FoodToken } from "../../gameComponents";
import { useAtom } from "jotai";
import {
  playerFoodSupplyAtom,
  testPlayerFoodAtom,
} from "../../../utils/jotaiStore";

const PlayerFoodSupply = () => {
  const [foodSupply, setFoodSupply] = useAtom(testPlayerFoodAtom);

  const foodSupplyContent = foodSupply.map((token) => (
    <FoodToken foodType={token} key={token.id} />
  ));
  return (
    <div>
      <p>Food Supply</p>
      <div className="flex">{foodSupplyContent}</div>
    </div>
  );
};

export default PlayerFoodSupply;
