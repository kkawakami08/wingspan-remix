import React from "react";
import { BirdCard } from "../../gameComponents";
import { useAtom } from "jotai";
import {
  birdHandAtom,
  testPlayerBirdHandAtom,
} from "../../../utils/jotaiStore";

const PlayerBirdHand = () => {
  const [birdHand, setBirdHand] = useAtom(testPlayerBirdHandAtom);

  const birdHandContent = birdHand.map((bird) => (
    <BirdCard
      bird={bird}
      key={bird.common_name}
      tray={false}
      hand={true}
      selected={false}
    />
  ));
  return (
    <div>
      <p>BirdHand</p>
      <div className="flex">{birdHandContent}</div>
    </div>
  );
};

export default PlayerBirdHand;
