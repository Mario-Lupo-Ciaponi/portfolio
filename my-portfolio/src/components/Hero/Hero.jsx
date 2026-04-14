import MarioLupoCiaponi from '../../assets/images/mario-lupo-ciaponi.JPG';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__tag">Available for opportunities</div>
        <h1 className="hero__title">
          Full-stack Developer
        </h1>
        <p className="hero__subtitle">
          Crafting modern, responsive web applications with clean code and thoughtful design.
          Turning ideas into interactive digital experiences.
        </p>
        <div className="hero__buttons">
          <button className="hero__btn hero__btn--primary">
            View My Work <span className="arrow">→</span>
          </button>
          <button className="hero__btn hero__btn--secondary">Contact Me</button>
        </div>
      </div>
      <div className="hero__image-container">
        <div className="hero__image-wrapper">
          <div className="hero__image-decoration hero__image-decoration--1"></div>
          <div className="hero__image-decoration hero__image-decoration--2"></div>
          <img
            src={MarioLupoCiaponi}
            alt="Mario Lupo Ciaponi Profile"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
