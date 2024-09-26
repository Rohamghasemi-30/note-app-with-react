// App.js
import React, { useState } from 'react';
import NoteApp from './components/NoteApp/NoteApp';
import HeaderNote from './components/HeaderNote/HeaderNote';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="container">
      <HeaderNote />
      <div className="App">
        <NoteApp notes={notes} setNotes={setNotes} />
      </div>
    </div>
  );
}

export default App;