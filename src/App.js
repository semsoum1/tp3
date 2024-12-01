import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Competances from './components/Competances';
import Experience from './components/Experience';
import About from './components/About';
import { useState } from 'react';

export function handlethis(){
  alert('tu as cliqué ici')
}

function App() {

  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);
  const [experiences, setExperiences] = useState(['Stage dans un startup','stage dans un autre startup']);
  const [projects, setProjects] = useState(['Portfolio React', 'Site E-commerce']);

  
  
  const addSkill = (newSkill) => {
    setSkills([...skills, newSkill]);
  };
  const addExperience = (newExperience) => {
  setExperiences((prevExperiences) => [...prevExperiences, newExperience]);
  };
  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };
  return (
      <>
      
      <Header/>
      <button onClick={handlethis} id='buttontest' type='reset'>click ici</button>
      

      <About name="Oussama Choukri" 
            description="à propos de moi"
            image="https://i.ibb.co/yd2LxNQ/Whats-App-Image-2024-10-31-14-56-49-79986582.jpg"  />

      
      <Competances skills={skills} onAddSkill={addSkill} />
      <Experience experiences={experiences} onAddExperience={addExperience} />
      <Projects projects={projects} onAddProject={addProject} />      
      
      <Footer/>
     </>
  );


}


export default App;
