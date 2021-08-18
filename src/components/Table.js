import React from "react";

function Table({ sushi, walletAmount }) {
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
        You have: ${walletAmount} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
