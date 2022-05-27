
import React, { useState } from 'react';
import RegisterForm from './components/Form';

function App() {
  const [ myState, setMyState ] = useState([
    {

    }
  ])
  const addToMyState = (newUser) => {
    setMyState([newUser, ...myState])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>BandMates</h1>
      </header>
    </div>
  );
}

export default App;
