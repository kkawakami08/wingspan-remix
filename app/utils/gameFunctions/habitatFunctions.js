export const activateAction = (
  setDisableSupply,
  setActionType,
  currentHabitat
) => {
  setActionType(currentHabitat);

  setDisableSupply(false);
};
