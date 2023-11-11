import React from "react";
import { FoodToken } from "../../gameComponents";
import { useAtom } from "jotai";
import { playerFoodSupplyAtom } from "../../../utils/jotaiStore";

const PlayerFoodSupply = () => {
  const [foodSupply, setFoodSupply] = useAtom(playerFoodSupplyAtom);

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
