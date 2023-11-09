import React from "react";

const BonusCard = ({ bonus }) => {
  return (
    <div className="border-2 border-slate-900 rounded-lg text-xs p-3 bg-lime-300">
      <p className="text-lg">{bonus.name}</p>
      <p className="">{bonus.vp.description}</p>
    </div>
  );
};

export default BonusCard;
