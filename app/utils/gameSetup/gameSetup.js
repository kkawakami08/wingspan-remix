import { bonusCards } from "../../data/bonusCards";

export let playerBonusHand = [];

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
};

export const bonusCardDeck = shuffle(bonusCards);
