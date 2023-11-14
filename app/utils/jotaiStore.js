import { atom } from "jotai";

import {
  bonusCardDeck,
  playerBirdHand,
  playerBonusHand,
  birdCardDeck,
  dealCards,
  initializePlayerFoodSupply,
  selectGoalTiles,
  birdTray,
} from "./gameSetup/gameSetup";
import { rollBirdFeeder } from "./gameFunctions/birdFeederFunctions";

//inital cards
dealCards();
export const birdDeckAtom = atom(birdCardDeck);
export const bonusDeckAtom = atom(bonusCardDeck);
export const birdHandAtom = atom(playerBirdHand);
export const bonusHandAtom = atom(playerBonusHand);
export const birdTrayAtom = atom(birdTray);

//initial food
const initialRoll = rollBirdFeeder();
export const birdFeederAtom = atom(initialRoll);
export const playerFoodSupplyAtom = atom(initializePlayerFoodSupply());

//testing= false - set to true on final
export const isSetupAtom = atom(false);
//

//selecting cards/tokens
export const selectedBirdsAtom = atom([]);
export const startingBonusAtom = atom([]);
export const selectedFoodAtom = atom([]);

//goal tiles

export const goalTilesAtom = atom(selectGoalTiles());

//roll dice boolean
export const disableRollingAtom = atom(false);

//discard piles
export const discardBonusCardsAtom = atom([]);
export const discardBirdCardsAtom = atom([]);

//VP
export const bonusVPAtom = atom(0);
export const birdVPAtom = atom(0);
