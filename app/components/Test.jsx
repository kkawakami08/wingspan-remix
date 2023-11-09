import React from "react";
import { useAtom } from "jotai";
import {
  birdHandAtom,
  bonusHandAtom,
  birdFeederAtom,
  playerFoodSupplyAtom,
} from "../utils/jotaiStore";
import { BirdCard, BonusCard, FoodToken, BirdFeeder } from "./gameComponents";

const Test = () => {
  const [birdHand] = useAtom(birdHandAtom);
  const [bonusHand] = useAtom(bonusHandAtom);
  const [birdFeeder] = useAtom(birdFeederAtom);
  const [playerFoodSupply] = useAtom(playerFoodSupplyAtom);

  const birdHandContent = birdHand.map((bird) => (
    <BirdCard bird={bird} key={bird.common_name} />
  ));

  const bonusHandContent = bonusHand.map((bonus) => (
    <BonusCard bonus={bonus} key={bonus.name} />
  ));

  const playerFoodSupplyContent = playerFoodSupply.map((item) => (
    <FoodToken foodType={item} key={item.id} />
  ));

  return (
    <div>
      <p>Bird Hand</p>
      <div className="flex gap-3">{birdHandContent}</div>
      <p>Bonus Hand</p>
      <div className="flex gap-3">{bonusHandContent}</div>
      <BirdFeeder />

      <p>Player Food Supply</p>
      <div className="flex gap-3 flex-wrap">{playerFoodSupplyContent}</div>
    </div>
  );
};

export default Test;
