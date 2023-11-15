// const initalForestHabitat = {
//   0: {
//     action: {
//       type: "die",
//       quantity: 1,
//       discard: "none",
//     },
//     bird: null,
//   },
//   1: {
//     action: {
//       type: "die",
//       quantity: 1,
//       discard: "card",
//     },
//     bird: null,
//   },
//   2: {
//     action: {
//       type: "die",
//       quantity: 2,
//       discard: "none",
//     },
//     bird: null,
//   },
//   3: {
//     action: {
//       type: "die",
//       quantity: 2,
//       discard: "card",
//     },
//     bird: null,
//   },
//   4: {
//     action: {
//       type: "die",
//       quantity: 3,
//       discard: "none",
//     },
//     bird: null,
//   },
//   5: {
//     action: {
//       type: "die",
//       quantity: 3,
//       discard: "card",
//     },
//     bird: null,
//   },
// };

export const activateAction = (habitat, birdCount, setDisableSupply) => {
  console.log(`There are currently ${birdCount} birds`);
  console.log(habitat[birdCount]);
  setDisableSupply(false);
};
