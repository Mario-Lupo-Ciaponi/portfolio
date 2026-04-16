import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    const emailAdress = "mario.lupo.ciaponi08@gmail.com";
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__grid">
                    <div className="footer__col footer__col--brand">
                        <div className="footer__brand-wrapper">
                            <h3 className="footer__brand">Mario Lupo Ciaponi</h3>
                            <div className="footer__brand-underline"></div>
                        </div>
                        <p className="footer__description">
                            Full-stack Developer passionate about creating beautiful, functional web experiences.
                            Let's build something amazing together.
                        </p>
                        <div className="footer__status">
                            <span className="footer__status-dot"></span>
                            <span>Available for new opportunities</span>
                        </div>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__title">Quick Links</h4>
                        <ul className="footer__links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__title">Get In Touch</h4>
                        <div className="footer__email-box">
                            <div className="footer__icon-card">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <span className="footer__email-text">{emailAdress}</span>
                        </div>

                        <h5 className="footer__subtitle">Connect</h5>
                        <div className="footer__socials">
                            <a href="https://github.com/Mario-Lupo-Ciaponi" target="_blank" className="footer__social-card" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/mario-lupo-ciaponi-5692562b9/?skipRedirect=true" target="_blank" className="footer__social-card" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100022598765536&locale=bg_BG" target="_blank" className="footer__social-card" aria-label="Facebook">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} Portfolio. Built with React.
                    </p>
                    <p className="footer__credit">
                        Coded with <FontAwesomeIcon icon={faHeart} className="footer__heart-icon" /> by a passionate developer
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
