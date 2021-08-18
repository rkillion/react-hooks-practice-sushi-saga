import React from "react";

function Table({ sushi }) {
  // renders an empty plate for every element in the array
  let emptyPlates = [];
  let nextPlateIndex = 1;
  if(sushi) {sushi.forEach(roll => {
    if(roll.eaten) {
    emptyPlates=[...emptyPlates,<div key={nextPlateIndex} className="empty-plate" style={{ top: -7 * nextPlateIndex }} />];
    nextPlateIndex++;
  }
  });}

  return (
    <>
      <h1 className="remaining">
        You have: ${/* Give me how much money I have left */} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
