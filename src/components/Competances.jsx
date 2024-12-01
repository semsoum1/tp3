import React from 'react'
import { useState } from 'react'

function Competances({skills, onAddSkill}) {

  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = (e) => {
    e.preventDefault(); 
    if (newSkill.trim()) {
      onAddSkill(newSkill); 
      setNewSkill('');}
    };
  return (
    <div className='competances'>
      <h3>competances</h3>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>      

      <form onSubmit={handleAddSkill}>

      <input type="text" 
      placeholder="Nouvelle compétence"  
      value={newSkill}   
      onChange={(e) => setNewSkill(e.target.value)} />
      
      <button type="submit">Ajouter une competance</button>

    </form>
    </div>
  )
}

export default Competances;