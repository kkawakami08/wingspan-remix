import React from "react";
import { useAtom } from "jotai";
import {
  birdDeckAtom,
  discardBirdCardsAtom,
  birdHandAtom,
  testBirdDeckAtom,
  testPlayerBirdHandAtom,
} from "../../../utils/jotaiStore";
import { BirdCard } from "../../gameComponents";
import { drawCard } from "../../../utils/gameFunctions/cards";

const BirdDeck = () => {
  const [birdDeck, setBirdDeck] = useAtom(testBirdDeckAtom);
  const [, setBirdHand] = useAtom(testPlayerBirdHandAtom);
  const [birdDiscard] = useAtom(discardBirdCardsAtom);

  let lastDiscard = birdDiscard.length - 1;

  return (
    <div className="flex gap-5">
      <div>
        <p>Bird Deck</p>
        <button
          className="bg-cyan-800 rounded-lg p-3 text-white"
          onClick={() => drawCard(birdDeck, setBirdHand, setBirdDeck)}
        >
          Draw Cards
        </button>
      </div>
      <div>
        <p>Bird Discard</p>
        {birdDiscard.length > 0 ? (
          <BirdCard bird={birdDiscard[lastDiscard]} />
        ) : (
          <p>Empty Discard</p>
        )}
      </div>
    </div>
  );
};

export default BirdDeck;
