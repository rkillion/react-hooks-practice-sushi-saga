import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushi, activeSushiIndex }) {
  let displaySushi = sushi ? sushi.slice(activeSushiIndex,activeSushiIndex+4) : null;
  console.log(displaySushi)

  return (
    <div className="belt">
      {displaySushi ? displaySushi.map(roll=> <Sushi key={roll.id} roll={roll}/>) : <h1>Making Sushi...</h1> }
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
