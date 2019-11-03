import React from 'react';
import './App.css';

function App() {
  const date = new Date();
  const first = "Jason";
  const last = "Real";
  return (
    <div>
      <p>{first + ' ' + last} the date is {date.toDateString()}</p>
    </div>
  )
}

export default App;
