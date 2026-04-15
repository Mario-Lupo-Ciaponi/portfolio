import TechStackHeader from '../TechStackHeader/TechStackHeader';
import TechStackGrid from '../TechStackGrid/TechStackGrid';
import './TechStack.css';

const TechStack = () => {
  return (
    <section className="tech-stack" id="tech">
      <div className="tech-stack__container">
        <TechStackHeader />
        <TechStackGrid />
      </div>
    </section>
  );
};

export default TechStack;
