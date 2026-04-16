import TechStackHeader from '../TechStackHeader/TechStackHeader';
import TechStackGrid from '../TechStackGrid/TechStackGrid';
import LearningTag from '../LearningTag/LearningTag';
import './TechStack.css';

const TechStack = () => {
  return (
    <section className="tech-stack" id="tech">
      <div className="tech-stack__container">
        <TechStackHeader />
        <TechStackGrid />
        
        <div className="tech-stack__footer">
          <LearningTag />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
