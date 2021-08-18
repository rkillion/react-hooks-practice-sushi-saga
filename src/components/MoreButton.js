import React from "react";

function MoreButton({ setActiveSushiIndex, activeSushiIndex }) {
  return <button onClick={()=>{
    setActiveSushiIndex(activeSushiIndex=>activeSushiIndex+4);
    console.log(activeSushiIndex);
  }}>More sushi!</button>;
}

export default MoreButton;
