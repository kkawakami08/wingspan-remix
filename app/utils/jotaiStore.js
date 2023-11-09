import { atom } from "jotai";

import {
  bonusCardDeck,
  playerBirdHand,
  playerBonusHand,
  birdCardDeck,
  dealCards,
} from "./gameSetup/gameSetup";
import { rollBirdFeeder } from "./gameFunctions/birdFeederFunctions";

dealCards();

export const birdDeckAtom = atom(birdCardDeck);
export const bonusDeckAtom = atom(bonusCardDeck);
export const birdHandAtom = atom(playerBirdHand);
export const bonusHandAtom = atom(playerBonusHand);

export const bonusVPAtom = atom(0);
export const birdVPAtom = atom(0);

export const birdFeederAtom = atom(rollBirdFeeder());
