import React from "react";
import { useAtom } from "jotai";
import {
  testForestAtom,
  testForestBirdCountAtom,
} from "../../utils/jotaiStore";

const ActionSpace = ({ space, habitat }) => {
  const [forest, setForest] = useAtom(testForestAtom);
  const [birdCount, setBirdCount] = useAtom(testForestBirdCountAtom);
  const { type, quantity, discard } = forest[space].action;
  const { bird } = forest[space].bird || {};
  //   console.log(bird);
  let typeCount = [];
  for (let i = 0; i < quantity; i++) {
    typeCount.push(type);
  }
  const typeContent = typeCount.map((item, index) => <p key={index}>{item}</p>);

  return (
    <div className="border-2 border-slate-800 rounded-lg p-5">
      <p>{habitat}</p>
      <p>Space {space}</p>
      <p>{typeContent}</p>
      {discard !== "none" && <p>{discard}</p>}
    </div>
  );
};

export default ActionSpace;