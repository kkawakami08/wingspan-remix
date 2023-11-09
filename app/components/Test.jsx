import React from "react";
import { useAtom } from "jotai";
import { bonusDeckAtom } from "../utils/jotaiStore";

const Test = () => {
  const [bonusDeck] = useAtom(bonusDeckAtom);
  return (
    <div>
      {bonusDeck.map((card) => (
        <p key={card.name}>{card.name}</p>
      ))}
    </div>
  );
};

export default Test;
