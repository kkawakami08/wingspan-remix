export const saveTraySelection = (
  setBirdHand,
  setStartingBirds,
  startingBirds
) => {
  setBirdHand((prev) => [...prev, ...startingBirds]);

  setStartingBirds([]);
};
