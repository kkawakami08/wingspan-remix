import { useState } from "react";
import { GameLayout, Setup } from "./game";
import { useAtom } from "jotai";
import { isSetupAtom } from "../utils/jotaiStore";

const Wingspan = () => {
  const [isSetup] = useAtom(isSetupAtom);
  return (
    <div>{isSetup ? <Setup /> : <GameLayout />}</div>

    // <div>
    //   <GameLayout />
    // </div>
  );
};

export default Wingspan;
