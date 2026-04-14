import AboutImage from '../../assets/images/about-image.png';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">

        <div className="about__image-container">
          <img src={AboutImage} alt="Mario Lupo Ciaponi" className="about__image" />
        </div>

        <div className="about__content">
          <div className="about__tag">About Me</div>
          <h2 className="about__title">
            Building the Web, <span className="highlight">One Project at a Time</span>
          </h2>
          <div className="about__text">
            <p>
              I'm a passionate developer on a journey to master the art of creating beautiful, functional web applications. What started as curiosity about how websites work has evolved into a deep commitment to crafting quality code.
            </p>
            <p>
              Every project is an opportunity to learn something new—whether it's exploring a modern framework, solving a complex problem, or finding the perfect balance between design and functionality. I believe in writing clean, maintainable code and building experiences that users genuinely enjoy.
            </p>
            <p>
              Currently seeking my first professional opportunity where I can contribute to meaningful projects, collaborate with experienced developers, and continue growing my skills in a real-world environment.
            </p>
          </div>

          <div className="about__stats">
            <div className="about__stat">
              <h3 className="about__stat-number">5+</h3>
              <p className="about__stat-label">Projects Built</p>
            </div>
            <div className="about__stat">
              <h3 className="about__stat-number">6+</h3>
              <p className="about__stat-label">Technologies</p>
            </div>
            <div className="about__stat">
              <h3 className="about__stat-number">100%</h3>
              <p className="about__stat-label">Commitment</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
