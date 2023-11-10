import { useState } from "react";
import { useAtom, atom } from "jotai";
import { birdHandAtom, startingBirdsAtom } from "../../utils/jotaiStore";

const BirdCard = ({ bird, starting }) => {
  const {
    habitat,
    common_name,
    scientific_name,
    vp,
    nest,
    wingspan,
    egg_limit,
    food: food_type,
    food_count,
    locations,
  } = bird;
  const { color, description } = bird.power;
  const {
    predator,
    eggs,
    food,
    tuck,
    draw,
    traveling,
    repeat_power,
    additional_bird,
    cache,
  } = bird.power.variable;

  let powerColor = "";
  if (color === "pink") powerColor = "bg-power_pink";
  if (color === "brown") powerColor = "bg-brown";

  const [startingBirds, setStartingBirds] = useAtom(startingBirdsAtom);
  const [birdHand, setBirdHand] = useAtom(birdHandAtom);
  //unique to card
  // const [isSelectedBird, setIsSelectedBird] = useState(false);

  const selectCard = () => {
    const initialHand = birdHand;
    const selectedCardIndex = initialHand
      .map((bird) => bird.common_name)
      .indexOf(common_name);
    const [selectedBird] = initialHand.splice(selectedCardIndex, 1);

    setStartingBirds((prev) => [...prev, selectedBird]);
    setBirdHand(initialHand);
    console.log("from func", startingBirds);
  };
  const deselectCard = () => {
    const initialHand = startingBirds;
    const selectedCardIndex = initialHand
      .map((bird) => bird.common_name)
      .indexOf(common_name);
    const [selectedBird] = initialHand.splice(selectedCardIndex, 1);

    setBirdHand((prev) => [...prev, selectedBird]);
    setStartingBirds(initialHand);
  };

  const birdSelection = () => {
    if (starting) {
      deselectCard();
    } else {
      selectCard();
    }
  };

  console.log("Starting?", common_name, starting);
  return (
    <div
      className="border-2 border-slate-900 rounded-lg text-xs p-3 bg-orange-200"
      onClick={birdSelection}
    >
      {starting && <p>SELECTED!</p>}
      <p className="text-lg">{common_name}</p>
      <p className={powerColor}>Power: {description}</p>

      <p>Points: {vp}</p>
    </div>
  );
};

export default BirdCard;
