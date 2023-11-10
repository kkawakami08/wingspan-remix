import React from "react";
import { useAtom } from "jotai";
import {
  birdHandAtom,
  bonusHandAtom,
  birdFeederAtom,
  playerFoodSupplyAtom,
  startingBirdsAtom,
  startingBonusAtom,
  startingFoodAtom,
  discardBirdCardsAtom,
  discardBonusCardsAtom,
} from "../utils/jotaiStore";
import { BirdCard, BonusCard, FoodToken, BirdFeeder } from "./gameComponents";
import { saveSelection } from "../utils/gameSetup/gameSetup";

const Test = () => {
  const [birdHand, setBirdHand] = useAtom(birdHandAtom);
  const [bonusHand, setBonusHand] = useAtom(bonusHandAtom);
  const [birdFeeder] = useAtom(birdFeederAtom);
  const [playerFoodSupply] = useAtom(playerFoodSupplyAtom);
  const [startingBirds, setStartingBirds] = useAtom(startingBirdsAtom);
  const [startingBonus, setStartingBonus] = useAtom(startingBonusAtom);
  const [startingFood, setStartingFood] = useAtom(startingFoodAtom);
  const [birdDiscard, setBirdDiscard] = useAtom(discardBirdCardsAtom);
  const [bonusDiscard, setBonusDiscard] = useAtom(discardBonusCardsAtom);

  let displaySubmit =
    (startingBirds.length > 0) & (startingFood.length > 0) &&
    startingBirds.length === startingFood.length &&
    startingBonus.length === 1;

  const birdHandContent = birdHand.map((bird) => (
    <BirdCard bird={bird} key={bird.common_name} starting={false} />
  ));
  const startingBirdHandContent = startingBirds.map((bird) => (
    <BirdCard bird={bird} key={bird.common_name} starting={true} />
  ));
  const startingBonusContent = startingBonus.map((bonus) => (
    <BonusCard bonus={bonus} key={bonus.name} starting={true} />
  ));

  const bonusHandContent = bonusHand.map((bonus) => (
    <BonusCard bonus={bonus} key={bonus.name} starting={false} />
  ));

  const playerFoodSupplyContent = playerFoodSupply.map((item) => (
    <FoodToken foodType={item} key={item.id} starting={false} />
  ));

  const startingFoodSupplyContent = startingFood.map((item) => (
    <FoodToken foodType={item} key={item.id} starting={true} />
  ));

  const submitHand = () => {
    saveSelection(
      startingBirds,
      birdHand,
      setBirdHand,
      setStartingBirds,
      setBirdDiscard
    );
    setStartingFood([]);
    saveSelection(
      startingBonus,
      bonusHand,
      setBonusHand,
      setStartingBonus,
      setBonusDiscard
    );
  };
  console.log("bird discard", birdDiscard, "bonus discard", bonusDiscard);

  return (
    <div>
      <p>Dealt Bird Cards: </p>
      <div className="flex gap-3">{birdHandContent}</div>
      <p>Selected Bird Cards: </p>
      <p>Need to spend {startingBirds.length} food</p>
      <div className="flex gap-3">{startingBirdHandContent}</div>
      <p>Player food supply: </p>
      <div className="flex gap-3 flex-wrap">{playerFoodSupplyContent}</div>
      <p>Selected food to discard</p>
      <p>discard {startingFood.length} food</p>
      <div className="flex gap-3">{startingFoodSupplyContent}</div>
      <p>Dealt Bonus Cards: </p>
      <div className="flex gap-3">{bonusHandContent}</div>
      <p>Selected Bonus Cards: </p>

      <div className="flex gap-3">{startingBonusContent}</div>
      <button
        className="bg-emerald-400 disabled:bg-red-600"
        disabled={!displaySubmit}
        onClick={submitHand}
      >
        Submit
      </button>
    </div>
  );
};

export default Test;
