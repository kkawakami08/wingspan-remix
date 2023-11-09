import React from "react";

const BirdFeederDice = ({ foodType }) => {
  return (
    <div className="border-2 border-slate-900 rounded-full px-5 py-3">
      {foodType}
    </div>
  );
};

export default BirdFeederDice;
