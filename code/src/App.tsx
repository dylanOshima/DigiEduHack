import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>StudySesh</h1>
      </header>
      <div className="App-menu">
        <button onClick={() => console.log("Hehe")}>
          Start a sesh
        </button>
        <button onClick={() => console.log("U have no friends")}>
          Join a sesh
        </button>
      </div>
    </div>
  );
}

export default App;
