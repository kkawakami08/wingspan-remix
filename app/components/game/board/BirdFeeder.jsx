import { useAtom } from "jotai";
import {
  birdFeederAtom,
  disableRollingAtom,
  selectedFoodAtom,
  playerFoodSupplyAtom,
  testForestAtom,
  testForestBirdCountAtom,
  testPlayerFoodAtom,
  disableDieSelectionAtom,
} from "../../../utils/jotaiStore";
import { BirdFeederDie } from "../../gameComponents";
import {
  enableRolling,
  rollBirdFeeder,
} from "../../../utils/gameFunctions/birdFeederFunctions";
import { saveSelection } from "../../../utils/gameFunctions/generalFunctions";

const BirdFeeder = () => {
  const [birdFeeder, setBirdFeeder] = useAtom(birdFeederAtom);
  const [disableRolling, setDisableRolling] = useAtom(disableRollingAtom);
  const [selectedFood, setSelectedFood] = useAtom(selectedFoodAtom);
  const [, setPlayerFoodSupply] = useAtom(playerFoodSupplyAtom);
  const [, setDisableDieSelection] = useAtom(disableDieSelectionAtom);

  const [, setTestPlayerFood] = useAtom(testPlayerFoodAtom);

  const [forest] = useAtom(testForestAtom);
  const [forestBirdCount] = useAtom(testForestBirdCountAtom);

  const diceQuantity = forest[forestBirdCount].action.quantity;

  const birdFeederContent = birdFeeder.map((item) => (
    <BirdFeederDie foodType={item} key={item.id} />
  ));

  const selectedFoodContent = selectedFood.map((item) => (
    <BirdFeederDie foodType={item} key={item.id} selected={true} />
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
      <div>
        <p>Selected Food</p>
        <div className="flex gap-3 flex-wrap">{selectedFoodContent}</div>
      </div>
      <button
        onClick={() => {
          if (selectedFood.length === diceQuantity) {
            saveSelection(setTestPlayerFood, setSelectedFood, selectedFood);
            enableRolling(birdFeeder, setDisableRolling);
            setDisableDieSelection(true);
          } else {
            console.log("Cant save!");
          }
        }}
        className="bg-emerald-800 rounded-lg p-3 text-white disabled:bg-emerald-200"
      >
        I've decided!
      </button>
    </div>
  );
};

export default BirdFeeder;
