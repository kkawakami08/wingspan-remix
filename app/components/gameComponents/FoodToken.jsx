import React from "react";

const FoodToken = ({ foodType }) => {
  return (
    <div className="border-2 border-slate-900 rounded-full px-5 py-3 bg-fuchsia-400">
      {foodType.type}
    </div>
  );
};

export default FoodToken;
