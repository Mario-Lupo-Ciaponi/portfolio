import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
    return (
        <navbar className="nav">
            <button className="menu-toggle">
                <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#ffffff",}} />
            </button>
        </navbar>
    )
}

export default Navbar;
