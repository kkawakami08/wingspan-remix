import { bonusCards } from "../../data/bonusCards";
import { birdCards } from "../../data/birdCards";
import { endOfRoundGoals } from "../../data/endOfRoundGoals";
import { nanoid } from "nanoid";

//cards
export let playerBirdHand = [];
export let playerBonusHand = [];
export let birdTray = [];

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const dealCards = () => {
  for (let i = 0; i < 2; i++) {
    playerBonusHand.push(bonusCardDeck.pop());
  }
  for (let i = 0; i < 5; i++) {
    playerBirdHand.push(birdCardDeck.pop());
  }
  for (let i = 0; i < 3; i++) {
    birdTray.push(birdCardDeck.pop());
  }
};

export const birdCardDeck = shuffle(birdCards);
export const bonusCardDeck = shuffle(bonusCards);

//food supply
export const initializePlayerFoodSupply = () => {
  let feedSupply = [];

  for (let i = 1; i <= 5; i++) {
    switch (i) {
      case 1:
        feedSupply.push({ type: "seed", id: nanoid() });
        break;
      case 2:
        feedSupply.push({ type: "invertebrate", id: nanoid() });
        break;
      case 3:
        feedSupply.push({ type: "fruit", id: nanoid() });
        break;
      case 4:
        feedSupply.push({ type: "rodent", id: nanoid() });
        break;
      case 5:
        feedSupply.push({ type: "fish", id: nanoid() });
        break;
    }
  }
  return feedSupply;
};

//selecting initial cards
export const selectCard = (hand, key, value, setHand, setStartingHand) => {
  const initialHand = hand;

  const selectedCardIndex = initialHand.map((card) => card[key]).indexOf(value);

  const [selectedCard] = initialHand.splice(selectedCardIndex, 1);

  setStartingHand((prev) => [...prev, selectedCard]);
  setHand(initialHand);
};
export const deselectCard = (
  startingHand,
  key,
  value,
  setHand,
  setStartingHand
) => {
  const initialHand = startingHand;
  const selectedCardIndex = initialHand.map((card) => card[key]).indexOf(value);
  const [selectedCard] = initialHand.splice(selectedCardIndex, 1);

  setHand((prev) => [...prev, selectedCard]);
  setStartingHand(initialHand);
};

export const saveSelection = (
  selectedCards,
  hand,
  setHand,
  setSelectedCards,
  setDiscardCards
) => {
  setHand(selectedCards);
  setDiscardCards((prev) => [...prev, ...hand]);
  setSelectedCards([]);
};

//goal tiles
export const selectGoalTiles = () => {
  let goalTiles = endOfRoundGoals;
  let selectedTiles = [];
  for (let i = 0; i < 4; i++) {
    const randomNum = Math.floor(Math.random() * (11 - 1) + 1);
    const randomIndex = Math.floor(Math.random() * goalTiles.length);
    const tile = goalTiles.splice(randomIndex, 1)[0];

    if (randomNum % 2 === 0) {
      selectedTiles.push(tile[0]);
    } else {
      selectedTiles.push(tile[1]);
    }
  }

  return selectedTiles;
};
