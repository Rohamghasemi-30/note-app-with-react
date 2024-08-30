import { useState } from 'react';
import NoteApp from './components/NoteApp/NoteApp';
import HeaderNote from './components/HeaderNote/HeaderNote'
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  console.log(notes);

  return (
    <div className='note-app'>
      <HeaderNote /><br /><br />
      <div className="container">
        <NoteApp setNotes={setNotes} />
        <div className="note-list"></div>
      </div>
    </div>
  );
}

export default App;
