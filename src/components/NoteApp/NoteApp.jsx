import React, { useState, useEffect } from 'react';
import './NoteApp.css';

function NoteApp() {
  const [notes, setNotes] = useState(() => {

    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
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
        <button type="submit">Add</button>
      </form>
      <div>
        {notes.map((note) => (
          <div key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <p>{new Date(note.createdTime).toLocaleString()}</p> {}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteApp;
