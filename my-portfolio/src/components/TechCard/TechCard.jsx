import './TechCard.css';

const TechCard = ({ icon, name, description }) => {
  return (
    <div className="tech-card">
      <div className="tech-card__icon-wrapper">
        <img src={icon} alt={`${name} icon`} className="tech-card__icon" />
      </div>
      <h3 className="tech-card__name">{name}</h3>
      <p className="tech-card__description">{description}</p>
    </div>
  );
};

export default TechCard;
