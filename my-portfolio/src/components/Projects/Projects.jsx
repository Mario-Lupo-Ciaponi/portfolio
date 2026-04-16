import ProjectGrid from '../ProjectGrid/ProjectGrid';
import ProjectsHeader from '../ProjectsHeader/ProjectsHeader';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects__container">
                <ProjectsHeader />
                <ProjectGrid />
            </div>
        </section>
    );
};

export default Projects;
