// components/HeaderNote.js
import React from 'react';
import './HeaderNote.css';

function HeaderNote() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="header-note">
      <img src="../public/images/logo.png" alt="Logo" className="logo" />
        <h1>Notes</h1>
        <span className="date">{today}</span>
      </div>
  );
}

export default HeaderNote;
