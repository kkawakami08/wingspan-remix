import { atom } from "jotai";

import {
  bonusCardDeck,
  playerBirdHand,
  playerBonusHand,
  birdCardDeck,
  dealCards,
  initializePlayerFoodSupply,
} from "./gameSetup/gameSetup";
import { rollBirdFeeder } from "./gameFunctions/birdFeederFunctions";

//inital cards
dealCards();
export const birdDeckAtom = atom(birdCardDeck);
export const bonusDeckAtom = atom(bonusCardDeck);
export const birdHandAtom = atom(playerBirdHand);
export const bonusHandAtom = atom(playerBonusHand);

//selecting starting hand/tokens
export const startingBirdsAtom = atom([]);
export const startingBonusAtom = atom([]);
export const startingFoodAtom = atom([]);

//VP
export const bonusVPAtom = atom(0);
export const birdVPAtom = atom(0);

//initial food
const initialRoll = rollBirdFeeder();
export const birdFeederAtom = atom(initialRoll);
export const playerFoodSupplyAtom = atom(initializePlayerFoodSupply());

//roll dice boolean
export const disableRollingAtom = atom(false);

//discard piles
export const discardBonusCardsAtom = atom([]);
export const discardBirdCardsAtom = atom([]);
