import { useAtom } from "jotai";
import { bonusHandAtom, startingBonusAtom } from "../../utils/jotaiStore";

import { cardSelection } from "../../utils/gameFunctions/generalFunctions";

const BonusCard = ({ bonus, starting }) => {
  const { name, automa, condition, explanation, card_percentage } = bonus;
  const {
    description,
    low_range_bird_count,
    low_range_points,
    high_range_bird_count,
    high_range_points,
    individual_points,
  } = bonus.vp;

  const [startingBonus, setStartingBonus] = useAtom(startingBonusAtom);
  const [bonusHand, setBonusHand] = useAtom(bonusHandAtom);

  const bonusSelection = () => {
    if (starting) {
      // deselectCard(startingBonus, "name", name, setBonusHand, setStartingBonus);
      cardSelection(
        startingBonus,
        "name",
        name,
        setBonusHand,
        setStartingBonus
      );
    } else {
      // selectCard(bonusHand, "name", name, setBonusHand, setStartingBonus);
      cardSelection(bonusHand, "name", name, setStartingBonus, setBonusHand);
    }
  };
  return (
    <div
      className="border-2 border-slate-900 rounded-lg text-xs p-3 bg-cyan-200 w-56"
      onClick={bonusSelection}
    >
      {starting && <p>SELECTED!</p>}
      <p className="text-lg">{name}</p>
      <p>Condition: {condition}</p>
    </div>
  );
};

export default BonusCard;
