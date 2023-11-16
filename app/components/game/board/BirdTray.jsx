import { useAtom } from "jotai";
import {
  birdHandAtom,
  birdTrayAtom,
  selectedBirdsAtom,
  birdDeckAtom,
  testBirdTrayAtom,
  testPlayerBirdHandAtom,
  testBirdDeckAtom,
  currentActionTypeAtom,
} from "../../../utils/jotaiStore";
import { BirdCard } from "../../gameComponents";
import { refillTray } from "../../../utils/gameFunctions/birdTrayFunctions";
import { saveSelection } from "../../../utils/gameFunctions/generalFunctions";

const BirdTray = () => {
  const [birdTray, setBirdTray] = useAtom(testBirdTrayAtom);

  const [selectedBirds, setSelectedBirds] = useAtom(selectedBirdsAtom);
  const [, setBirdHand] = useAtom(testPlayerBirdHandAtom);
  const [birdDeck, setBirdDeck] = useAtom(testBirdDeckAtom);

  const [currentActionType] = useAtom(currentActionTypeAtom);

  const birdTrayContent = birdTray.map((bird) => (
    <BirdCard
      bird={bird}
      key={bird.common_name}
      tray={true}
      // selected={true}
    />
  ));

  return (
    <div>
      <p>Bird Tray</p>
      <div className="flex gap-10">
        <div className="flex gap-3">{birdTrayContent}</div>
        <button
          onClick={() =>
            refillTray(birdTray, birdDeck, setBirdDeck, setBirdTray)
          }
          className="bg-emerald-800 rounded-lg p-3 text-white disabled:bg-emerald-200"
        >
          Refill Bird Tray
        </button>
      </div>
    </div>
  );
};

export default BirdTray;
