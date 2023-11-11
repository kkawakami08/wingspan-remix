import React from "react";
import { useAtom } from "jotai";
import { goalTilesAtom } from "../../utils/jotaiStore";

const GoalBoard = () => {
  const [goalTiles] = useAtom(goalTilesAtom);

  const goalTilesContent = goalTiles.map((tile) => (
    <p key={tile.id}>
      {tile.type} {tile.specifier}
    </p>
  ));
  return (
    <div>
      <p>Goal Board</p>
      <div>{goalTilesContent}</div>
    </div>
  );
};

export default GoalBoard;
