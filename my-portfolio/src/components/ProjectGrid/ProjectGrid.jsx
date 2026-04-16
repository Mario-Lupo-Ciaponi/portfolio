import ProjectCard from '../ProjectCard/ProjectCard';
import { projectsData } from '../../data/projectsData';
import './ProjectGrid.css';

const ProjectGrid = () => {
    return (
        <div className="project-grid">
            {projectsData.map((project) => (
                <ProjectCard
                    key={project.title}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    githubUrl={project.githubUrl}
                    url={project.url}
                    hasLiveDemo={project.hasLiveDemo}
                    gridAreaName={project.gridAreaName}
                />
            ))}
        </div>
    );
};

export default ProjectGrid;
