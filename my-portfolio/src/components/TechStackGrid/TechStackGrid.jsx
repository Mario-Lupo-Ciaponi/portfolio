import TechCard from "../TechCard/TechCard.jsx";
import { techStackData } from "../../data/techStackData.js";
import "./TechStackGrid.css";

const TechStackGrid = () => {
    return (
        <div className="tech-stack__grid">
            {techStackData.map((tech) => {
                return (
                    <TechCard
                        icon={tech.icon}
                        name={tech.name}
                        description={tech.description}
                    />
                )
            })}
        </div>
    );
};

export default TechStackGrid;
