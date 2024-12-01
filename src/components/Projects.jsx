import { useState } from 'react';

function Projects({ projects, onAddProject }) {
  const [newProject, setNewProject] = useState('');

  const handleAddProject = (e) => {
    e.preventDefault();
    if (newProject.trim()) {
      onAddProject(newProject);
      setNewProject('');
    }
  };
  return (
    <div className='projects'><h3>projects</h3>
     <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}

      </ul>
      <form onSubmit={handleAddProject}>
        <input
          type="text"
          placeholder="Nouveau projet"
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
        />
        <button type="submit">Ajouter un project</button>
      </form>
    </div>
  )
}

export default Projects;