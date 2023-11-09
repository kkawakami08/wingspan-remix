import React from "react";

const BirdCard = ({ bird }) => {
  const {
    habitat,
    common_name,
    scientific_name,
    vp,
    nest,
    wingspan,
    egg_limit,
    food: food_type,
    food_count,
    locations,
  } = bird;
  const { color, description } = bird.power;
  const {
    predator,
    eggs,
    food,
    tuck,
    draw,
    traveling,
    repeat_power,
    additional_bird,
    cache,
  } = bird.power.variable;

  let powerColor = "";
  if (color === "pink") powerColor = "bg-power_pink";
  if (color === "brown") powerColor = "bg-brown";

  return (
    <div className="border-2 border-slate-900 rounded-lg text-xs p-3 bg-orange-200">
      <p className="text-lg">{common_name}</p>
      <p className={powerColor}>Power: {description}</p>

      <p>Points: {vp}</p>
    </div>
  );
};

export default BirdCard;
