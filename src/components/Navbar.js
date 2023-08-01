import { NavLink} from "react-router-dom";
import "./Navbar.css"

function Navbar({ logout }) {

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
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Navbar;
