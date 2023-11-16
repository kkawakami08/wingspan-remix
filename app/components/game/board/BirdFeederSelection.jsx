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
  discardedItemBoolAtom,
  currentActionTypeAtom,
} from "../../../utils/jotaiStore";
import { BirdFeederDie } from "../../gameComponents";
import { enableRolling } from "../../../utils/gameFunctions/birdFeederFunctions";
import { saveSelection } from "../../../utils/gameFunctions/generalFunctions";

const BirdFeederSelection = () => {
  const [birdFeeder, setBirdFeeder] = useAtom(birdFeederAtom);
  const [disableRolling, setDisableRolling] = useAtom(disableRollingAtom);
  const [selectedFood, setSelectedFood] = useAtom(selectedFoodAtom);
  const [, setPlayerFoodSupply] = useAtom(playerFoodSupplyAtom);
  const [, setDisableDieSelection] = useAtom(disableDieSelectionAtom);

  const [, setTestPlayerFood] = useAtom(testPlayerFoodAtom);

  const [forest] = useAtom(testForestAtom);
  const [forestBirdCount] = useAtom(testForestBirdCountAtom);
  const [, setCurrentActionType] = useAtom(currentActionTypeAtom);

  const [discardedItem, setDiscardedItem] = useAtom(discardedItemBoolAtom);

  const diceQuantity = forest[forestBirdCount].action.quantity + discardedItem;
  console.log(`can now take ${diceQuantity} dice`);

  const selectedFoodContent = selectedFood.map((item) => (
    <BirdFeederDie foodType={item} key={item.id} selected={true} />
  ));

  const saveFood = () => {
    saveSelection(setTestPlayerFood, setSelectedFood, selectedFood);

    setDiscardedItem(0);
    setCurrentActionType("");
    setDisableDieSelection(true);
    enableRolling(birdFeeder, setDisableRolling);
  };

  const disableSave = selectedFood.length === diceQuantity;

  return (
    <div className="flex gap-5">
      <div>
        <p>Selected Food</p>
        <div className="flex gap-3 flex-wrap">{selectedFoodContent}</div>
      </div>
      <button
        disabled={!disableSave}
        onClick={saveFood}
        className="bg-emerald-800 rounded-lg p-3 text-white disabled:bg-emerald-200"
      >
        I've decided!
      </button>
    </div>
  );
};

export default BirdFeederSelection;
