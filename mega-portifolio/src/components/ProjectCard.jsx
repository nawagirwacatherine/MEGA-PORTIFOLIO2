import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, techStack, link }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech Stack:</strong> {techStack}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
