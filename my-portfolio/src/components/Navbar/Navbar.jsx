import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Mario Lupo Ciaponi</div>
      <ul className="navbar__links">
        <li className="navbar__item active">
          <a href="#about">About</a>
        </li>
        <li className="navbar__item">
          <a href="#skills">Skills</a>
        </li>
        <li className="navbar__item">
          <a href="#projects">Projects</a>
        </li>
        <li className="navbar__item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="navbar__action">
        <button className="navbar__button">Contact Me</button>
      </div>
    </nav>
  );
};

export default Navbar;
