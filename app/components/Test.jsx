import { useState } from "react";
import { PlayerBoard, Setup } from "./game";

const Test = () => {
  const [isSetup, setIsSetup] = useState(true);
  return (
    <div>{isSetup ? <Setup setIsSetup={setIsSetup} /> : <PlayerBoard />}</div>
  );
};

export default Test;
