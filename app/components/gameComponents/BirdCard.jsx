import { useAtom } from "jotai";
import {
  birdHandAtom,
  selectedBirdsAtom,
  birdTrayAtom,
  isSetupAtom,
  currentActionTypeAtom,
  testForestBirdCountAtom,
  testPlayerBirdHandAtom,
} from "../../utils/jotaiStore";

import { cardSelection } from "../../utils/gameFunctions/generalFunctions";
import { discardItem } from "../../utils/gameFunctions/generalFunctions";

const BirdCard = ({ bird, selected, tray, hand }) => {
  const [isSetup] = useAtom(isSetupAtom);
  const [currentActionType] = useAtom(currentActionTypeAtom);
  const [forestBirdCount] = useAtom(testForestBirdCountAtom);

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
  if (color === "pink") powerColor = "bg-power_pink p-2";
  if (color === "brown") powerColor = "bg-brown p-2";

  const [selectedBirds, setSelectedBirds] = useAtom(selectedBirdsAtom);
  const [birdTray, setBirdTray] = useAtom(birdTrayAtom);

  const [birdHand, setBirdHand] = useAtom(testPlayerBirdHandAtom);

  const birdSelection = () => {
    if (selected) {
      cardSelection(
        selectedBirds,
        "common_name",
        common_name,
        setBirdHand,
        setSelectedBirds
      );

      console.log(`Set ${common_name} back in hand`);
    } else {
      cardSelection(
        birdHand,
        "common_name",
        common_name,
        setSelectedBirds,
        setBirdHand
      );
      console.log(`Set ${common_name} to discard`);
    }
  };

  const habitatFunction = () => {
    if (currentActionType === "forest") {
      discardItem(forestBirdCount, hand, birdSelection);
    } else {
      console.log("Nope");
    }
  };

  return (
    <div
      className="border-2 border-slate-900 rounded-lg text-xs p-3 bg-emerald-200 w-52"
      onClick={habitatFunction}
    >
      {/* {selected && <p>SELECTED!</p>} */}
      <p className="text-lg">{common_name}</p>
      <p className={powerColor}>Power: {description}</p>

      <p>Points: {vp}</p>
    </div>
  );
};

export default BirdCard;
