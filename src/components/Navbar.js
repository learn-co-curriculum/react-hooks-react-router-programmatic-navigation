import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar({ setIsLoggedIn }) {
  const navigate = useNavigate();

  function handleLogout() {
    setIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
       
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={linkStyles}

      >
        About
      </NavLink>
      <NavLink
        to="/login"
        style={linkStyles}

      >
        Login
      </NavLink>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Navbar;
