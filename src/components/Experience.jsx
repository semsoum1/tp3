import React from 'react'
import { useState } from 'react';

function Experience({experiences, onAddExperience}) {

  const [newExperience, setNewExperience] = useState('');

  const handleAddExperience = (e) => {
    e.preventDefault();
    if (newExperience.trim()) {
      onAddExperience(newExperience);
      setNewExperience('');
    }
  };

  return (
    <div className='experience'><h3>experience</h3>
     <ul>
        {experiences.map((experience, index) => (
          <li key={index}>{experience}</li>
        ))}
      </ul>
    <form onSubmit={handleAddExperience}>
        <input
          type="text"
          placeholder="Nouvelle expérience"
          value={newExperience}
          onChange={(e) => setNewExperience(e.target.value)}
        />
        <button type="submit">Ajouter une experience</button>
      </form>
    </div>
  )
}

export default Experience;