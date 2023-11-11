import React from "react";
import { BirdCard } from "../../gameComponents";
import { useAtom } from "jotai";
import { birdHandAtom } from "../../../utils/jotaiStore";

const PlayerBirdHand = () => {
  const [birdHand, setBirdHand] = useAtom(birdHandAtom);

  const birdHandContent = birdHand.map((bird) => (
    <BirdCard bird={bird} key={bird.common_name} />
  ));
  return (
    <div>
      <p>BirdHand</p>
      <div className="flex">{birdHandContent}</div>
    </div>
  );
};

export default PlayerBirdHand;
