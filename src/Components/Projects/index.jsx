import ProjectData from '../ProjectData'; // Make sure the import name matches
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Import GitHub icon

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">My Latest Projects</h1> {/* Added a class for styling */}
      <div className="projects-grid">
        {ProjectData.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
                {project.liveLink && ( // Only render live link if it exists
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-link">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="view-more-container">
        <button onClick={() => window.open("https://github.com/AnandhaKumar2004", "_blank")} className="view-more-link github-link">
          <FontAwesomeIcon icon={faGithub} /> GitHub
          View More Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;