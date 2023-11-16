import React from "react";
import { useAtom } from "jotai";
import {
  testForestAtom,
  testForestBirdCountAtom,
} from "../../utils/jotaiStore";

const ActionSpace = ({ space, habitat }) => {
  const [forest] = useAtom(testForestAtom);
  const [birdCount] = useAtom(testForestBirdCountAtom);
  const { type, quantity, discard } = forest[space].action;
  const { bird } = forest[space].bird || {};
  //   console.log(bird);

  const spaceCSS =
    birdCount === Number(space)
      ? "bg-white border-2 border-slate-800 rounded-lg p-5"
      : "border-2 border-slate-800 rounded-lg p-5";

  return (
    <div className={spaceCSS}>
      <p>Space {space}</p>
      <p>{quantity} dice</p>
      <p>discard: {discard}</p>
    </div>
  );
};

export default ActionSpace;
