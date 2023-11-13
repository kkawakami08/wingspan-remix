import { useAtom } from "jotai";
import {
  birdHandAtom,
  selectedBirdsAtom,
  birdTrayAtom,
  isSetupAtom,
} from "../../utils/jotaiStore";
import { selectCard, deselectCard } from "../../utils/gameSetup/gameSetup";

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
  if (color === "pink") powerColor = "bg-power_pink";
  if (color === "brown") powerColor = "bg-brown";

  const [selectedBirds, setSelectedBirds] = useAtom(selectedBirdsAtom);
  const [birdTray, setBirdTray] = useAtom(birdTrayAtom);

  const [birdHand, setBirdHand] = useAtom(birdHandAtom);

  const birdSelection = () => {
    if (isSetup) {
      //selected bird functionality
      if (selected) {
        deselectCard(
          selectedBirds,
          "common_name",
          common_name,
          setBirdHand,
          setSelectedBirds
        );
      } else {
        selectCard(
          birdHand,
          "common_name",
          common_name,
          setBirdHand,
          setSelectedBirds
        );
      }
    } else {
      //bird tray functionality
      if (tray && selected) {
        deselectCard(
          birdTray,
          "common_name",
          common_name,
          setSelectedBirds,
          setBirdTray
        );
      } else if (!tray && selected) {
        selectCard(
          selectedBirds,
          "common_name",
          common_name,
          setSelectedBirds,
          setBirdTray
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
