import { useAtom } from "jotai";
import {
  birdHandAtom,
  birdTrayAtom,
  startingBirdsAtom,
} from "../../../utils/jotaiStore";
import { BirdCard } from "../../gameComponents";
import { saveTraySelection } from "../../../utils/gameFunctions/birdTrayFunctions";

const BirdTray = () => {
  const [birdTray, setBirdTray] = useAtom(birdTrayAtom);
  //   console.log(birdTray);
  const [startingBirds, setStartingBirds] = useAtom(startingBirdsAtom);
  const [birdHand, setBirdHand] = useAtom(birdHandAtom);

  const birdTrayContent = birdTray.map((bird) => (
    <BirdCard bird={bird} key={bird.common_name} starting={true} tray={true} />
  ));

  const selectedBirdsContent = startingBirds.map((bird) => (
    <BirdCard bird={bird} key={bird.common_name} starting={true} />
  ));

  console.log("starting Birds", startingBirds);
  console.log("Bird tray", birdTray);
  console.log("Bird hand", birdHand);

  return (
    <div>
      <p>Bird Tray</p>

      <div className="flex gap-3">{birdTrayContent}</div>
      <p>Selected Birds</p>

      <div className="flex gap-3">{selectedBirdsContent}</div>
      <button
        onClick={() =>
          saveTraySelection(setBirdHand, setStartingBirds, startingBirds)
        }
        className="bg-emerald-800 rounded-lg p-3 text-white disabled:bg-emerald-200"
      >
        I've decided!
      </button>
    </div>
  );
};

export default BirdTray;
