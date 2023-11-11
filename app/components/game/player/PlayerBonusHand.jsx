import React from "react";
import { BonusCard } from "../../gameComponents";
import { useAtom } from "jotai";
import { bonusHandAtom } from "../../../utils/jotaiStore";

const PlayerBonusHand = () => {
  const [bonusHand, setBonusHand] = useAtom(bonusHandAtom);

  const bonusHandContent = bonusHand.map((bonus) => (
    <BonusCard bonus={bonus} key={bonus.name} />
  ));
  return (
    <div>
      <p>BonusHand</p>
      <div className="flex">{bonusHandContent}</div>
    </div>
  );
};

export default PlayerBonusHand;
