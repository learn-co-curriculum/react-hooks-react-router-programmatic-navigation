import { NavLink} from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar() {

  return (
    <nav>
      <NavLink
        to="/"
        style={linkStyles} 
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={linkStyles}
      >
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;
