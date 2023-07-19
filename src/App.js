import { useState} from "react";
import { Outlet, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () =>{
    setIsLoggedIn(true)
  }

  const logout = () =>{
    setIsLoggedIn(false)
  }

  return (
    <div className="app">
      {isLoggedIn ? <Navbar logout={logout}  /> : <Navigate to="/login" />}
      <Outlet context={{isLoggedIn, login}}/>
    </div>
  );
}

export default App;
