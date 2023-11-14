import { useAtom } from "jotai";
import {
  playerFoodSupplyAtom,
  selectedFoodAtom,
  isSetupAtom,
} from "../../utils/jotaiStore";
import { foodSelection } from "../../utils/gameFunctions/generalFunctions";

const FoodToken = ({ foodType, selected }) => {
  const [isSetup] = useAtom(isSetupAtom);
  const { type, id } = foodType;

  const [selectedFood, setSelectedFood] = useAtom(selectedFoodAtom);

  const [playerFoodSupply, setPlayerFoodSupply] = useAtom(playerFoodSupplyAtom);

  const selectFood = () => {
    if (isSetup) {
      if (selected) {
        foodSelection(selectedFood, setPlayerFoodSupply, id);
      } else {
        foodSelection(playerFoodSupply, setSelectedFood, id);
      }
    } else {
      if (selected) {
        foodSelection(selectedFood, setPlayerFoodSupply, id);
      } else {
        foodSelection(playerFoodSupply, setSelectedFood, id);
      }
    }
  };

  return (
    <div
      className="border-2 border-slate-900 rounded-lg text-xs p-3 bg-pink-200"
      onClick={selectFood}
    >
      {selected && <p>SELECTED!</p>}
      <p className="text-lg">{type}</p>
    </div>
  );
};

export default FoodToken;
