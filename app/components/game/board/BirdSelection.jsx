import { useAtom } from "jotai";
import {
  selectedBirdsAtom,
  discardBirdCardsAtom,
  currentActionTypeAtom,
  discardedItemBoolAtom,
  additionalItemAtom,
} from "../../../utils/jotaiStore";
import { BirdCard } from "../../gameComponents";
import { saveSelection } from "../../../utils/gameFunctions/generalFunctions";

const BirdSelection = () => {
  const [selectedBirds, setSelectedBirds] = useAtom(selectedBirdsAtom);

  const [, setBirdDiscard] = useAtom(discardBirdCardsAtom);
  const [, setCurrentActionType] = useAtom(currentActionTypeAtom);

  const [, setDiscardedItem] = useAtom(discardedItemBoolAtom);
  const [, setAdditionalItem] = useAtom(additionalItemAtom);

  const disableDiscard = selectedBirds.length === 1;

  const selectedBirdsContent = selectedBirds.map((bird) => (
    <BirdCard
      bird={bird}
      key={bird.common_name}
      selected={true}
      hand={false}
      tray={false}
    />
  ));

  const discardSelection = () => {
    console.log("Discarded");
    saveSelection(setBirdDiscard, setSelectedBirds, selectedBirds);
    // setCurrentActionType("");
    // setDiscardedItem(true);
    setAdditionalItem(1);
  };

  return (
    <div>
      <p>Bird Selection</p>

      <div className="flex gap-5">
        <div className="flex gap-3">{selectedBirdsContent}</div>
        <button
          disabled={!disableDiscard}
          onClick={discardSelection}
          className="bg-emerald-800 rounded-lg p-3 text-white disabled:bg-emerald-200"
        >
          Discard this bird
        </button>
      </div>
    </div>
  );
};

export default BirdSelection;
