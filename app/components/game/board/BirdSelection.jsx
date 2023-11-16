import { useAtom } from "jotai";
import {
  selectedBirdsAtom,
  discardBirdCardsAtom,
  additionalItemAtom,
  birdFeederAtom,
  disableRollingAtom,
} from "../../../utils/jotaiStore";
import { BirdCard } from "../../gameComponents";
import { saveSelection } from "../../../utils/gameFunctions/generalFunctions";
import { enableRolling } from "../../../utils/gameFunctions/birdFeederFunctions";

const BirdSelection = () => {
  const [selectedBirds, setSelectedBirds] = useAtom(selectedBirdsAtom);

  const [, setBirdDiscard] = useAtom(discardBirdCardsAtom);

  const [, setAdditionalItem] = useAtom(additionalItemAtom);
  const [birdFeeder] = useAtom(birdFeederAtom);
  const [, setDisableRolling] = useAtom(disableRollingAtom);

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
    saveSelection(setBirdDiscard, setSelectedBirds, selectedBirds);
    setAdditionalItem(1);
    enableRolling(birdFeeder, setDisableRolling);
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
