
import './App.css';
import React, { useState, useEffect } from 'react';



const  App = () => {
  
  const [counter, setCounter]= useState(0);

  useEffect(() => {
    setCounter(1000);
  }, []);
  
  return (
    <div className="App">
      <button   onClick={() => setCounter( (prevCount) => prevCount -1)}>-</button>
      
      <h1>{counter}</h1>

      <button   onClick={() => setCounter( (prevCount) => prevCount +1)}>+</button>
     

    </div>
    
  );
}

export default App;
