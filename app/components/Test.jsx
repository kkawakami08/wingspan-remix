import React from "react";
import { useAtom } from "jotai";
import {
  birdHandAtom,
  bonusHandAtom,
  birdFeederAtom,
} from "../utils/jotaiStore";
import { BirdCard, BonusCard, BirdFeederDice } from "./gameComponents";

const Test = () => {
  const [birdHand] = useAtom(birdHandAtom);
  const [bonusHand] = useAtom(bonusHandAtom);
  const [birdFeeder] = useAtom(birdFeederAtom);

  const birdHandContent = birdHand.map((bird) => (
    <BirdCard bird={bird} key={bird.common_name} />
  ));

  const bonusHandContent = bonusHand.map((bonus) => (
    <BonusCard bonus={bonus} key={bonus.name} />
  ));

  const birdFeederContent = birdFeeder.map((item) => (
    <BirdFeederDice foodType={item.type} key={item.id} />
  ));

  return (
    <div>
      <p>Bird Hand</p>
      <div className="flex gap-3">{birdHandContent}</div>
      <p>Bonus Hand</p>
      <div className="flex gap-3">{bonusHandContent}</div>
      <p>Bird Feeder</p>
      <div className="flex gap-3">{birdFeederContent}</div>
    </div>
  );
};

export default Test;
