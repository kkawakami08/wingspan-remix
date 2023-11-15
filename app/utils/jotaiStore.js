import { atom } from "jotai";

import {
  testPlayerBirds,
  testBirdDeck,
  testBirdTray,
} from "../data/testing/birdCardTests";
import { testPlayerBonus, testBonusDeck } from "../data/testing/bonusCardTests";

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

const initialDisabledRolling = initialRoll.every(
  (die) => die.type === initialRoll[0].type
)
  ? true
  : false;

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
export const disableRollingAtom = atom(initialDisabledRolling);
export const disableDieSelectionAtom = atom(true);
export const disableSelectionSaveAtom = atom(true);

//discard piles
export const discardBonusCardsAtom = atom([]);
export const discardBirdCardsAtom = atom([]);

//VP
export const bonusVPAtom = atom(0);
export const birdVPAtom = atom(0);

//testing purposes
export const testPlayerBirdHandAtom = atom(testPlayerBirds);
export const testBirdDeckAtom = atom(testBirdDeck);
export const testBirdTrayAtom = atom(testBirdTray);
export const testPlayerBonusHandAtom = atom(testPlayerBonus);
export const testBonusDeckAtom = atom(testBonusDeck);
export const testPlayerFoodAtom = atom(initializePlayerFoodSupply());

const initalForestHabitat = {
  0: {
    action: {
      type: "die",
      quantity: 1,
      discard: "none",
    },
    bird: null,
  },
  1: {
    action: {
      type: "die",
      quantity: 1,
      discard: "card",
    },
    bird: null,
  },
  2: {
    action: {
      type: "die",
      quantity: 2,
      discard: "none",
    },
    bird: null,
  },
  3: {
    action: {
      type: "die",
      quantity: 2,
      discard: "card",
    },
    bird: null,
  },
  4: {
    action: {
      type: "die",
      quantity: 3,
      discard: "none",
    },
    bird: null,
  },
  5: {
    action: {
      type: "die",
      quantity: 3,
      discard: "card",
    },
    bird: null,
  },
};

export const testForestAtom = atom(initalForestHabitat);
export const testForestBirdCountAtom = atom(0);
