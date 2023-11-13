import React from "react";
import { useAtom } from "jotai";
import {
  birdHandAtom,
  bonusHandAtom,
  playerFoodSupplyAtom,
  selectedBirdsAtom,
  startingBonusAtom,
  startingFoodAtom,
  discardBirdCardsAtom,
  discardBonusCardsAtom,
  isSetupAtom,
} from "../../utils/jotaiStore";
import { BirdCard, BonusCard, FoodToken } from "../gameComponents";
import { saveSelection } from "../../utils/gameSetup/gameSetup";

const Setup = () => {
  const [, setIsSetup] = useAtom(isSetupAtom);

  const [birdHand, setBirdHand] = useAtom(birdHandAtom);
  const [bonusHand, setBonusHand] = useAtom(bonusHandAtom);

  const [playerFoodSupply] = useAtom(playerFoodSupplyAtom);
  const [selectedBirds, setSelectedBirds] = useAtom(selectedBirdsAtom);
  const [startingBonus, setStartingBonus] = useAtom(startingBonusAtom);
  const [startingFood, setStartingFood] = useAtom(startingFoodAtom);
  const [, setBirdDiscard] = useAtom(discardBirdCardsAtom);
  const [, setBonusDiscard] = useAtom(discardBonusCardsAtom);

  let disableButton =
    (selectedBirds.length > 0) & (startingFood.length > 0) &&
    selectedBirds.length === startingFood.length &&
    startingBonus.length === 1;

  const birdHandContent = birdHand.map((bird) => (
    <BirdCard bird={bird} key={bird.common_name} selected={false} />
  ));
  const selectedBirdHandContent = selectedBirds.map((bird) => (
    <BirdCard bird={bird} key={bird.common_name} selected={true} />
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
      selectedBirds,
      birdHand,
      setBirdHand,
      setSelectedBirds,
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
    setIsSetup(false);
  };

  return (
    <div className="flex flex-col gap-3 p-5 items-center">
      <p>This is your initial setup. Pick your birds and one bonus card. </p>
      <div className="flex gap-5">
        <div className="flex flex-col items-center gap-5 w-1/2">
          <p className="text-lg font-bold">Birds</p>
          <div className="flex gap-3 flex-wrap">{birdHandContent}</div>
        </div>
        <div className="flex flex-col items-center gap-5 w-1/2">
          <p className="text-lg font-bold">Selected Birds</p>
          <div className="flex gap-3 flex-wrap">{selectedBirdHandContent}</div>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex flex-col items-center gap-5 w-1/2">
          <p className="text-lg font-bold">Bonus Cards</p>
          <div className="flex gap-3 flex-wrap">{bonusHandContent}</div>
        </div>
        <div className="flex flex-col items-center gap-5 w-1/2">
          <p className="text-lg font-bold">Selected Bonus Card</p>
          <div className="flex gap-3 flex-wrap">{startingBonusContent}</div>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col items-center gap-5 w-1/2">
          <div className="flex flex-col text-center">
            <p className="text-lg font-bold">Food Supply</p>
            <p className="text-lg">
              Discard {selectedBirds.length} Food Tokens
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">{playerFoodSupplyContent}</div>
        </div>
        <div className="flex flex-col items-center gap-5 w-1/2">
          <p className="text-lg font-bold">Food Tokens to discard</p>
          <div className="flex gap-3 flex-wrap">
            {startingFoodSupplyContent}
          </div>
        </div>
      </div>
      <button
        disabled={!disableButton}
        onClick={submitHand}
        className="bg-emerald-800 rounded-lg p-3 text-white disabled:bg-emerald-200"
      >
        I've decided!
      </button>
    </div>
  );
};

export default Setup;
