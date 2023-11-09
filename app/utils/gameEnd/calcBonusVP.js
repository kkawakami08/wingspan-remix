export const calcBonusVP = (bonusHand, playedBirds) => {
  let applicableBonusCards = [];
  let bonusVP = 0;

  //count how many birds apply to each bonus Card
  for (const bonusCard of bonusHand) {
    let bonusBirdCount = 0;
    playedBirds.map((bird) => {
      if (bird.bonus_cards.includes(bonusCard.name)) {
        bonusBirdCount++;
      }
    });
    if (bonusBirdCount !== 0)
      applicableBonusCards.push([bonusCard, bonusBirdCount]);
  }

  for (const card of applicableBonusCards) {
    const [bonusCard, birdCount] = card;

    if (bonusCard.vp.individual_points)
      bonusVP += birdCount * bonusCard.vp.individual_points;
    else {
      if (
        birdCount >= bonusCard.vp.low_range_bird_count[0] &&
        birdCount <= bonusCard.vp.low_range_bird_count[1]
      )
        bonusVP += bonusCard.vp.low_range_points;
      else if (birdCount >= bonusCard.vp.high_range_bird_count)
        bonusVP += bonusCard.vp.high_range_points;
    }
  }
  return bonusVP;
};
