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
  const initialHand = source;
  const selectedCardIndex = initialHand.map((card) => card[key]).indexOf(value);
  const [selectedCard] = initialHand.splice(selectedCardIndex, 1);

  setDestination((prev) => [...prev, selectedCard]);
  setSource(initialHand);
};

export const foodSelection = (source, setDestination, foodId) => {
  let initialSupply = source;

  const index = initialSupply.map((e) => e.id).indexOf(foodId);

  const [item] = initialSupply.splice(index, 1);

  setDestination((prev) => [...prev, item]);
};
