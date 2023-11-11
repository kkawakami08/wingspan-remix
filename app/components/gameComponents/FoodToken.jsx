import { useAtom } from "jotai";
import { playerFoodSupplyAtom, startingFoodAtom } from "../../utils/jotaiStore";
import { selectCard, deselectCard } from "../../utils/gameSetup/gameSetup";

const FoodToken = ({ foodType, starting }) => {
  const { type, id } = foodType;

  const [startingFood, setStartingFood] = useAtom(startingFoodAtom);

  const [playerFoodSupply, setPlayerFoodSupply] = useAtom(playerFoodSupplyAtom);

  const foodSelection = () => {
    if (starting) {
      deselectCard(
        startingFood,
        "id",
        id,
        setPlayerFoodSupply,
        setStartingFood
      );
    } else {
      selectCard(
        playerFoodSupply,
        "id",
        id,
        setPlayerFoodSupply,
        setStartingFood
      );
    }
  };

  return (
    <div
      className="border-2 border-slate-900 rounded-lg text-xs p-3 bg-pink-200"
      onClick={foodSelection}
    >
      {starting && <p>SELECTED!</p>}
      <p className="text-lg">{type}</p>
    </div>
  );
};

export default FoodToken;
