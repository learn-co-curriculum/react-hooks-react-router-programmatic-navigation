import { NavLink} from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link" 
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;
