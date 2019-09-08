import React from 'react';
import ClickCounter from "./components/ClickCounter"
import HoverCounter from "./components/HoverCounter"
import './App.css';

function App() {
  return (
    <div className="App">
      <ClickCounter name = "Fethi"/>
      <HoverCounter name = "You know who"/>
    </div>
  );
}

export default App;
