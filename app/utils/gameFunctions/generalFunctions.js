export const saveSelection = (setPlayer, setSelection, selection) => {
  setPlayer((prev) => [...prev, ...selection]);

  setSelection([]);
};

export const cardSelection = (
  source,
  key,
  value,
  setDestination,
  setSource
) => {
  console.log("source", source);
  const initialHand = source;
  const selectedCardIndex = initialHand.map((card) => card[key]).indexOf(value);
  const [selectedCard] = initialHand.splice(selectedCardIndex, 1);
  console.log("selected bird", selectedCard);

  setDestination((prev) => [...prev, selectedCard]);
  setSource((prev) => [...initialHand]);
};

export const foodSelection = (source, setDestination, foodId) => {
  let initialSupply = source;

  const index = initialSupply.map((e) => e.id).indexOf(foodId);

  const [item] = initialSupply.splice(index, 1);

  setDestination((prev) => [...prev, item]);
};

export const discardItem = (birdCount, playerBool, selectionFunc) => {
  const canDiscard = birdCount === 1 || birdCount === 3 || birdCount === 5;

  if (playerBool && canDiscard) {
    console.log("You can discard this item");
    selectionFunc();
  } else {
    console.log("You put back the item");
    selectionFunc();
  }
};
