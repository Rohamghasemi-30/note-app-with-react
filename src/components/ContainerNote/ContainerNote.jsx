import React from 'react';
import './ContainerNote.css';

const ContainerNote = ({ note }) => {
  return (
    <div className="note-card">
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <p>{new Date(note.createdTime).toLocaleString()}</p>
    </div>
  );
};

export default ContainerNote;