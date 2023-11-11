import { useAtom } from "jotai";
import { birdHandAtom, startingBirdsAtom } from "../../utils/jotaiStore";
import { selectCard, deselectCard } from "../../utils/gameSetup/gameSetup";

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

  const birdSelection = () => {
    if (starting) {
      deselectCard(
        startingBirds,
        "common_name",
        common_name,
        setBirdHand,
        setStartingBirds
      );
    } else {
      selectCard(
        birdHand,
        "common_name",
        common_name,
        setBirdHand,
        setStartingBirds
      );
    }
  };

  return (
    <div
      className="border-2 border-slate-900 rounded-lg text-xs p-3 bg-emerald-200 w-52"
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
