import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi,setSushi] = useState(null);
  const [activeSushiIndex,setActiveSushiIndex] = useState(0);

  useEffect(()=>{
    fetch(API).then(r=>r.json()).then(sushi=>{
      setSushi(sushi);
    })
  }, [])

  return (
    <div className="app">
      <SushiContainer sushi={sushi} activeSushiIndex={activeSushiIndex}/>
      <Table />
    </div>
  );
}

export default App;
