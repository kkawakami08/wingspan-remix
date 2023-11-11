import React from "react";
import { useAtom } from "jotai";
import {
  birdDeckAtom,
  discardBirdCardsAtom,
  birdHandAtom,
} from "../../../utils/jotaiStore";
import { BirdCard } from "../../gameComponents";
import { drawCard } from "../../../utils/gameFunctions/cards";

const BirdDeck = () => {
  const [birdDeck, setBirdDeck] = useAtom(birdDeckAtom);
  const [, setBirdHand] = useAtom(birdHandAtom);
  const [birdDiscard] = useAtom(discardBirdCardsAtom);

  let lastDiscard = birdDiscard.length - 1;

  return (
    <div>
      <p>Bird Deck</p>
      <button
        className="bg-cyan-800 rounded-lg p-3 text-white"
        onClick={() => drawCard(birdDeck, setBirdHand, setBirdDeck)}
      >
        Draw Cards
      </button>
      <p>Bird Discard</p>
      <BirdCard bird={birdDiscard[lastDiscard]} />
    </div>
  );
};

export default BirdDeck;
