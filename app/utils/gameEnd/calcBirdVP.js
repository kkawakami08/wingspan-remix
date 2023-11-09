export const calcBirdVP = (playedBirds) => {
  let birdVP = 0;
  for (const bird of playedBirds) {
    birdVP += bird.vp;
  }
  return birdVP;
};
