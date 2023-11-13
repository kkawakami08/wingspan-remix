import { useAtom } from "jotai";
import {
  birdHandAtom,
  birdTrayAtom,
  selectedBirdsAtom,
  birdDeckAtom,
} from "../../../utils/jotaiStore";
import { BirdCard } from "../../gameComponents";
import {
  saveTraySelection,
  refillTray,
} from "../../../utils/gameFunctions/birdTrayFunctions";

const BirdTray = () => {
  const [birdTray, setBirdTray] = useAtom(birdTrayAtom);

  const [selectedBirds, setSelectedBirds] = useAtom(selectedBirdsAtom);
  const [, setBirdHand] = useAtom(birdHandAtom);
  const [birdDeck, setBirdDeck] = useAtom(birdDeckAtom);

  const birdTrayContent = birdTray.map((bird) => (
    <BirdCard bird={bird} key={bird.common_name} selected={true} tray={true} />
  ));

  const selectedBirdsContent = selectedBirds.map((bird) => (
    <BirdCard bird={bird} key={bird.common_name} selected={true} />
  ));

  return (
    <div>
      <p>Bird Tray</p>

      <div className="flex gap-3">{birdTrayContent}</div>
      <button
        onClick={() => refillTray(birdTray, birdDeck, setBirdDeck, setBirdTray)}
        className="bg-emerald-800 rounded-lg p-3 text-white disabled:bg-emerald-200"
      >
        Refill Bird Tray
      </button>
      <p>Selected Birds</p>

      <div className="flex gap-3">{selectedBirdsContent}</div>
      <button
        onClick={() =>
          saveTraySelection(setBirdHand, setSelectedBirds, selectedBirds)
        }
        className="bg-emerald-800 rounded-lg p-3 text-white disabled:bg-emerald-200"
      >
        I've decided!
      </button>
    </div>
  );
};

export default BirdTray;
