import React from "react";
import AddWalletForm from "./AddWalletForm";

function Table({ sushi, walletAmount, setWalletAmount }) {
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
        <AddWalletForm walletAmount={walletAmount} setWalletAmount= {setWalletAmount}/>
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
