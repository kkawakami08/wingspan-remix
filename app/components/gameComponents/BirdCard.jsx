import { useAtom } from "jotai";
import {
  birdHandAtom,
  selectedBirdsAtom,
  birdTrayAtom,
  isSetupAtom,
} from "../../utils/jotaiStore";

import { cardSelection } from "../../utils/gameFunctions/generalFunctions";

const BirdCard = ({ bird, selected, tray }) => {
  const [isSetup] = useAtom(isSetupAtom);
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

  const [birdHand, setBirdHand] = useAtom(birdHandAtom);

  const birdSelection = () => {
    if (isSetup) {
      //selected bird functionality
      if (selected) {
        cardSelection(
          selectedBirds,
          "common_name",
          common_name,
          setBirdHand,
          setSelectedBirds
        );
      } else {
        cardSelection(
          birdHand,
          "common_name",
          common_name,
          setSelectedBirds,
          setBirdHand
        );
      }
    } else {
      //bird tray functionality
      if (tray && selected) {
        cardSelection(
          birdTray,
          "common_name",
          common_name,
          setSelectedBirds,
          setBirdTray
        );
      } else if (!tray && selected) {
        cardSelection(
          selectedBirds,
          "common_name",
          common_name,
          setBirdTray,
          setSelectedBirds
        );
      }
    }
  };

  return (
    <div
      className="border-2 border-slate-900 rounded-lg text-xs p-3 bg-emerald-200 w-52"
      onClick={birdSelection}
    >
      {selected && <p>SELECTED!</p>}
      <p className="text-lg">{common_name}</p>
      <p className={powerColor}>Power: {description}</p>

      <p>Points: {vp}</p>
    </div>
  );
};

export default BirdCard;
