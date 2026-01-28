import "./HamburgerMenu.css";

const HamburgerMenu = () => {
    return (
        <ul className="hamburger-menu">
            <li className="menu-item">
                <a href="#" className="menu-link">About Me</a>
            </li>
            <li className="menu-item">
                <a href="#" className="menu-link">Skills</a>
            </li>
            <li className="menu-item">
                <a href="#" className="menu-link">Contacts</a>
            </li>
        </ul>
    )
}

export default HamburgerMenu;
