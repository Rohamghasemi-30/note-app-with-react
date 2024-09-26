// components/NoteApp/NoteApp.js
import React, { useState, useEffect } from 'react';
import './NoteApp.css';
import ContainerNote from '../ContainerNote/ContainerNote';

function NoteApp({ notes, setNotes }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      setError(true);
      return;
    }

    const newNote = {
      title,
      description,
      id: Date.now(),
      createdTime: new Date().toISOString(),
      isFinished: false,
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
    setTitle('');
    setDescription('');
    setError(false);
  };

  const handleDelete = (id) => {
    setNotes((prevNotes) => prevNotes.filter(note => note.id !== id));
  };

  return (
    <div className="container-noteapp">
      <h2>Add a Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={error && !title ? 'error' : ''}
        />
        <textarea
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className={error && !description ? 'error' : ''}
        />
        <button type="submit">Add</button><br /><br />
      </form>
      <div>
        {notes.map((note) => (
          <ContainerNote key={note.id} note={note} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default NoteApp;
