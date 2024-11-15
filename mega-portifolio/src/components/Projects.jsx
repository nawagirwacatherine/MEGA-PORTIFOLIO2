
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectList = [
    { title: 'Project 1', description: 'Description of project 1', techStack: 'React, CSS', link: '#' },
    { title: 'Project 2', description: 'Description of project 2', techStack: 'HTML, CSS, JS', link: '#' }
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-container">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
