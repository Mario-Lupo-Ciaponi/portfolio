import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons';
import './ProjectCard.css';

const ProjectCard = ({ image, title, description, technologies, hasLiveDemo, githubUrl, url, gridAreaName }) => {
    return (
        <div className="project-card" style={{ gridArea: gridAreaName }}>
            <div className="project-card__image-wrapper">
                {image && <img src={image} alt={title} className="project-card__image" />}
            </div>

            <div className="project-card__body">
                <h3 className="project-card__title">{title}</h3>
                <p className="project-card__description">{description}</p>

                <ul className="project-card__technologies">
                    {technologies.map((tech) => (
                        <li key={tech} className="project-card__tech-tag">{tech}</li>
                    ))}
                </ul>

                <div className="project-card__actions">
                    {hasLiveDemo && (
                        <a
                            href={url}
                            className="project-card__action-btn project-card__action-btn--demo"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faEye} />
                            Live Demo
                        </a>
                    )}

                    <a
                        href={githubUrl}
                        className="project-card__action-btn project-card__action-btn--code"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faCode} />
                        View Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
