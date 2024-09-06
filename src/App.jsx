// App.js
import React, { useState } from 'react';
import NoteApp from './components/NoteApp/NoteApp';
import ContainerNote from './components/ContainerNote/ContainerNote';
import HeaderNote from './components/HeaderNote/HeaderNote';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="container">
      <HeaderNote />
      <div className="App">
        <NoteApp setNotes={setNotes} />
        <div className="notes-container">
          {notes.map((note) => (
            <ContainerNote key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
