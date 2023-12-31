import { useAtom } from "jotai";
import {
  birdFeederAtom,
  disableRollingAtom,
  selectedFoodAtom,
} from "../../../utils/jotaiStore";
import { BirdFeederDie } from "../../gameComponents";
import {
  enableRolling,
  rollBirdFeeder,
} from "../../../utils/gameFunctions/birdFeederFunctions";

const BirdFeeder = () => {
  const [birdFeeder, setBirdFeeder] = useAtom(birdFeederAtom);
  const [disableRolling, setDisableRolling] = useAtom(disableRollingAtom);
  const [selectedFood, setSelectedFood] = useAtom(selectedFoodAtom);

  const birdFeederContent = birdFeeder.map((item) => (
    <BirdFeederDie foodType={item} key={item.id} />
  ));

  const rollDice = () => {
    const newRoll = rollBirdFeeder();
    setBirdFeeder(newRoll);

    enableRolling(newRoll, setDisableRolling);
  };

  return (
    <div className="flex gap-5">
      <div>
        <p>Bird Feeder</p>
        <div className="flex gap-3 flex-wrap">{birdFeederContent}</div>
        <button
          className="p-1 border-2 border-slate-600 rounded-lg disabled:bg-red-500 disabled:text-slate-400"
          disabled={disableRolling}
          onClick={rollDice}
        >
          Roll Dice
        </button>
      </div>
    </div>
  );
};

export default BirdFeeder;
