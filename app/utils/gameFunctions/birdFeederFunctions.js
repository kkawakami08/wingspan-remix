import { nanoid } from "nanoid";

export const rollBirdFeeder = () => {
  let birdFeederSupply = [];

  for (let i = 0; i < 5; i++) {
    let dieFace = Math.floor(Math.random() * 6 + 1);

    switch (dieFace) {
      case 1:
        birdFeederSupply.push({ type: "seed", id: nanoid() });
        break;
      case 2:
        birdFeederSupply.push({ type: "invertebrate", id: nanoid() });
        break;
      case 3:
        birdFeederSupply.push({ type: "fruit", id: nanoid() });
        break;
      case 4:
        birdFeederSupply.push({ type: "rodent", id: nanoid() });
        break;
      case 5:
        birdFeederSupply.push({ type: "fish", id: nanoid() });
        break;
      case 6:
        birdFeederSupply.push({ type: "invertebrate_seed", id: nanoid() });
        break;
    }
  }

  return birdFeederSupply;
};

export const takeDie = (
  birdFeederSupply,
  setPlayerFoodSupply,
  diceId,
  setDisableRolling
) => {
  let initialSupply = birdFeederSupply;

  const index = initialSupply.map((e) => e.id).indexOf(diceId);
  const [die] = initialSupply.splice(index, 1);

  setPlayerFoodSupply((prev) => [...prev, die]);
  // console.log("birdfeeder: ", initialSupply);
  enableRolling(initialSupply, setDisableRolling);
};

export const enableRolling = (birdFeederSupply, setDisableRolling) => {
  if (birdFeederSupply.every((die) => die.type === birdFeederSupply[0].type)) {
    setDisableRolling(true);
  } else {
    setDisableRolling(false);
  }
};
