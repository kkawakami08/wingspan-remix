import React from "react";
import { useAtom } from "jotai";
import {
  birdHandAtom,
  bonusHandAtom,
  birdFeederAtom,
  playerFoodSupplyAtom,
  startingBirdsAtom,
} from "../utils/jotaiStore";
import { BirdCard, BonusCard, FoodToken, BirdFeeder } from "./gameComponents";

const Test = () => {
  const [birdHand] = useAtom(birdHandAtom);
  const [bonusHand] = useAtom(bonusHandAtom);
  const [birdFeeder] = useAtom(birdFeederAtom);
  const [playerFoodSupply] = useAtom(playerFoodSupplyAtom);
  const [startingBirds, setStartingBirds] = useAtom(startingBirdsAtom);

  const birdHandContent = birdHand.map((bird) => (
    <BirdCard bird={bird} key={bird.common_name} starting={false} />
  ));
  const startingBirdsContent = startingBirds.map((bird) => (
    <BirdCard bird={bird} key={bird.common_name} starting={true} />
  ));

  const bonusHandContent = bonusHand.map((bonus) => (
    <BonusCard bonus={bonus} key={bonus.name} />
  ));

  const playerFoodSupplyContent = playerFoodSupply.map((item) => (
    <FoodToken foodType={item} key={item.id} />
  ));
  // console.log("from test", startingBirds);
  return (
    <div>
      <p>Bird Hand</p>
      <div className="flex gap-3">{birdHandContent}</div>
      <p>Selected Birds</p>
      <div className="flex gap-3">{startingBirdsContent}</div>
      {/* <p>Bonus Hand</p>
      <div className="flex gap-3">{bonusHandContent}</div>
      <BirdFeeder />

      <p>Player Food Supply</p>
      <div className="flex gap-3 flex-wrap">{playerFoodSupplyContent}</div> */}
    </div>
  );
};

export default Test;
