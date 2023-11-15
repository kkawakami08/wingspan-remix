import React from "react";
import { useAtom } from "jotai";
import {
  bonusDeckAtom,
  discardBonusCardsAtom,
  bonusHandAtom,
  testBonusDeckAtom,
  testPlayerBonusHandAtom,
} from "../../../utils/jotaiStore";
import { BonusCard } from "../../gameComponents";
import { drawCard } from "../../../utils/gameFunctions/cards";

const BonusDeck = () => {
  const [bonusDeck, setBonusDeck] = useAtom(testBonusDeckAtom);
  const [, setBonusHand] = useAtom(testPlayerBonusHandAtom);
  const [bonusDiscard] = useAtom(discardBonusCardsAtom);

  let lastDiscard = bonusDiscard.length - 1;

  return (
    <div className="flex gap-5">
      <div>
        <p>Bonus Deck</p>
        <button
          className="bg-cyan-800 rounded-lg p-3 text-white"
          onClick={() => drawCard(bonusDeck, setBonusHand, setBonusDeck)}
        >
          Draw Cards
        </button>
      </div>
      <div>
        <p>Bonus Discard</p>
        {bonusDiscard.length > 0 ? (
          <BonusCard bonus={bonusDiscard[lastDiscard]} />
        ) : (
          <p>Empty discard</p>
        )}
      </div>
    </div>
  );
};

export default BonusDeck;
