import { ActionSpace } from "../../../gameComponents";
import { useAtom } from "jotai";
import {
  testForestAtom,
  testForestBirdCountAtom,
  disableDieSelectionAtom,
  currentActionTypeAtom,
  discardedItemBoolAtom,
} from "../../../../utils/jotaiStore";
import { activateAction } from "../../../../utils/gameFunctions/habitatFunctions";

const Forest = () => {
  const [, setDiscardedBoolean] = useAtom(discardedItemBoolAtom);
  const [forest] = useAtom(testForestAtom);
  const [habitatBirdCount] = useAtom(testForestBirdCountAtom);
  const [, setDisableDieSelection] = useAtom(disableDieSelectionAtom);

  const [, setCurrentActionType] = useAtom(currentActionTypeAtom);

  const forestArray = Object.keys(forest);

  const forestContent = forestArray.map((space, index) => (
    <ActionSpace space={space} key={index} habitat={"forest"} />
  ));

  return (
    <div
      className="flex gap-10 bg-emerald-500 "
      onClick={() => {
        activateAction(setDisableDieSelection, setCurrentActionType, "forest");

        if (forest[habitatBirdCount].action.discard !== "none") {
          setDiscardedBoolean(true);
        }
      }}
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
