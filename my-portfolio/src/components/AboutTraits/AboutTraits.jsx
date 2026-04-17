import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faLightbulb, faFire, faEnvelope, faFileDownload, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './AboutTraits.css';

const AboutTraits = () => {
    return (
        <section className="about-traits" id="contact">
            <div className="about-traits__container">
                {/* Header Section */}
                <div className="about-traits__header">
                    <div className="about-traits__badge">
                        <FontAwesomeIcon icon={faCircle} className="about-traits__badge-dot" />
                        Currently Available
                    </div>
                    <h2 className="about-traits__title">
                        I'm Looking for My First <span className="highlight">Opportunity</span>
                    </h2>
                    <p className="about-traits__subtitle">
                        Open to internships, junior developer roles, and freelance projects. 
                        Ready to bring energy, dedication, and a fresh perspective to your team.
                    </p>
                </div>

                {/* Traits Grid */}
                <div className="about-traits__grid">
                    <div className="about-traits__card">
                        <FontAwesomeIcon icon={faRocket} className="about-traits__icon about-traits__icon--rocket" />
                        <span>Quick learner</span>
                    </div>
                    <div className="about-traits__card">
                        <FontAwesomeIcon icon={faLightbulb} className="about-traits__icon about-traits__icon--bulb" />
                        <span>Problem solver</span>
                    </div>
                    <div className="about-traits__card">
                        <FontAwesomeIcon icon={faFire} className="about-traits__icon about-traits__icon--fire" />
                        <span>Always motivated</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="about-traits__actions">
                    <a href="mailto:mario.lupo.ciaponi08@gmail.com" className="about-traits__btn about-traits__btn--primary">
                        <FontAwesomeIcon icon={faEnvelope} />
                        Get In Touch
                    </a>
                    <a href="#" className="about-traits__btn about-traits__btn--outline">
                        <FontAwesomeIcon icon={faFileDownload} />
                        Download Resume
                    </a>
                </div>

                {/* Footer Section */}
                <div className="about-traits__footer">
                    <div className="about-traits__divider"></div>
                    <p className="about-traits__footer-text">Or connect with me on</p>
                    <div className="about-traits__socials">
                        <a href="https://github.com/Mario-Lupo-Ciaponi" target="_blank" rel="noopener noreferrer" className="about-traits__social-link">
                            <FontAwesomeIcon icon={faGithub} />
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/mario-lupo-ciaponi-5692562b9/" target="_blank" rel="noopener noreferrer" className="about-traits__social-link">
                            <FontAwesomeIcon icon={faLinkedin} />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTraits;
