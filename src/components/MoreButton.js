import React from "react";

function MoreButton({ setActiveSushiIndex, activeSushiIndex, sushi }) {
  return <button onClick={()=>{
    let newIndex = activeSushiIndex===sushi.length-4 ? 0 : activeSushiIndex+4;
    setActiveSushiIndex(newIndex);
    console.log(activeSushiIndex);
  }}>More sushi!</button>;
}

export default MoreButton;
