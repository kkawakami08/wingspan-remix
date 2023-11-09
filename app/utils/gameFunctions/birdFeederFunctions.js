export const rollBirdFeeder = () => {
  let birdFeederSupply = [];
  let id = 1;
  for (let i = 0; i < 5; i++) {
    let dieFace = Math.floor(Math.random() * 6 + 1);

    switch (dieFace) {
      case 1:
        birdFeederSupply.push({ type: "seed", id });
        break;
      case 2:
        birdFeederSupply.push({ type: "invertebrate", id });
        break;
      case 3:
        birdFeederSupply.push({ type: "fruit", id });
        break;
      case 4:
        birdFeederSupply.push({ type: "rodent", id });
        break;
      case 5:
        birdFeederSupply.push({ type: "fish", id });
        break;
      case 6:
        birdFeederSupply.push({ type: "invertebrate_seed", id });
        break;
    }
    id++;
  }
  return birdFeederSupply;
};
