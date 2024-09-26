// components/ContainerNote/ContainerNote.js
import React from 'react';
import './ContainerNote.css';

const ContainerNote = ({ note, onDelete }) => {
  return (
    <div className="note-card">
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <p>{new Date(note.createdTime).toLocaleString()}</p>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
};

export default ContainerNote;
``