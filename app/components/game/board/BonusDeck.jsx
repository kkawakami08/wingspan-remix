import React from "react";
import { useAtom } from "jotai";
import {
  bonusDeckAtom,
  discardBonusCardsAtom,
  bonusHandAtom,
} from "../../../utils/jotaiStore";
import { BonusCard } from "../../gameComponents";
import { drawCard } from "../../../utils/gameFunctions/cards";

const BonusDeck = () => {
  const [bonusDeck, setBonusDeck] = useAtom(bonusDeckAtom);
  const [, setBonusHand] = useAtom(bonusHandAtom);
  const [bonusDiscard] = useAtom(discardBonusCardsAtom);

  let lastDiscard = bonusDiscard.length - 1;

  return (
    <div>
      <p>Bonus Deck</p>
      <button
        className="bg-cyan-800 rounded-lg p-3 text-white"
        onClick={() => drawCard(bonusDeck, setBonusHand, setBonusDeck)}
      >
        Draw Cards
      </button>
      <p>Bonus Discard</p>
      <BonusCard bonus={bonusDiscard[lastDiscard]} />
    </div>
  );
};

export default BonusDeck;
