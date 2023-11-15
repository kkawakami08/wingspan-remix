import { ActionSpace } from "../../../gameComponents";
//zero: take 1 die
//one: take 1 die - disard card to get 1+
//two: take 2 die
//three: take 2 die - disard card to get 1+
//four: take 3 die
//full: take 3 die - disard card to get 1+
import { useAtom } from "jotai";
import {
  testForestAtom,
  testForestBirdCountAtom,
  disableDieSelectionAtom,
} from "../../../../utils/jotaiStore";
import { activateAction } from "../../../../utils/gameFunctions/habitatFunctions";

const Forest = () => {
  const [forest, setForest] = useAtom(testForestAtom);
  const [habitatBirdCount, setHabitatBirdCount] = useAtom(
    testForestBirdCountAtom
  );
  const [, setDisableDieSelection] = useAtom(disableDieSelectionAtom);

  const forestArray = Object.keys(forest);
  const forestContent = forestArray.map((space, index) => (
    <ActionSpace space={space} key={index} habitat={"forest"} />
  ));

  return (
    <div
      className="flex gap-10 bg-emerald-500 "
      onClick={() =>
        activateAction(forest, habitatBirdCount, setDisableDieSelection)
      }
    >
      <div className="flex flex-col">
        <p>forest</p>
        <p>Gain food from birdfeeder</p>
        <p>Current birds: {habitatBirdCount}</p>
      </div>
      <div className="flex gap-5">{forestContent}</div>
    </div>
  );
};

export default Forest;
