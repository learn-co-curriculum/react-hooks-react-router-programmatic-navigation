import { NavLink} from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar({ logout }) {

  function handleLogout() {
    logout();
  }

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
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;
