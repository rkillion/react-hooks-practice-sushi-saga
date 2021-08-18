import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi,setSushi] = useState(null);
  const [activeSushiIndex,setActiveSushiIndex] = useState(0);
  const [walletAmount,setWalletAmount] = useState(100);

  useEffect(()=>{
    fetch(API).then(r=>r.json()).then(sushi=>{
      setSushi(sushi);
    })
  }, [])

  function eatSushi(roll) {
    if(walletAmount-roll.price>=0) {
      let rollIndex = sushi.indexOf(roll);
      let rollCopy = JSON.parse(JSON.stringify(roll));
      rollCopy.eaten = true;
      setSushi([...sushi.slice(0,rollIndex),rollCopy,...sushi.slice(rollIndex+1)])
      setWalletAmount(walletAmount=>walletAmount-roll.price);
    } else {
      alert("You don't have enough $$$!")
    }
  }

  return (
    <div className="app">
      <SushiContainer 
        sushi={sushi} 
        activeSushiIndex={activeSushiIndex} 
        setActiveSushiIndex={setActiveSushiIndex}
        eatSushi={eatSushi}
        />
      <Table sushi={sushi} walletAmount={walletAmount}/>
    </div>
  );
}

export default App;
