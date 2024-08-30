import { useState } from 'react';
import "../NoteApp/NoteApp.css"

function AddNote({ setNotes }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
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
  };

  return (
    <div className='container-noteapp'>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="title note"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="description "
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input className='sub' type="submit" value="finish" />
      </form>
    </div>
  );
}

export default AddNote;
``