import { atom, createStore } from "jotai";

import {
  bonusCardDeck,
  playerBirdHand,
  playerBonusHand,
  birdCardDeck,
  dealCards,
  initializePlayerFoodSupply,
} from "./gameSetup/gameSetup";
import {
  rollBirdFeeder,
  enableRolling,
} from "./gameFunctions/birdFeederFunctions";

export const wingspanStore = createStore();

//card
dealCards();
export const birdDeckAtom = atom(birdCardDeck);
export const bonusDeckAtom = atom(bonusCardDeck);
export const birdHandAtom = atom(playerBirdHand);
export const bonusHandAtom = atom(playerBonusHand);

//VP
export const bonusVPAtom = atom(0);
export const birdVPAtom = atom(0);

//food
const initialRoll = rollBirdFeeder();
export const birdFeederAtom = atom(initialRoll);
export const playerFoodSupplyAtom = atom(initializePlayerFoodSupply());

//

export const disableRollingAtom = atom(false);
