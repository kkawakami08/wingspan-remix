import { useState } from "react";
import { GameLayout, Setup } from "./game";

const Wingspan = () => {
  const [isSetup, setIsSetup] = useState(true);
  return (
    // <div>{isSetup ? <Setup setIsSetup={setIsSetup} /> : <GameLayout />}</div>
    <div>
      <GameLayout />
    </div>
  );
};

export default Wingspan;
