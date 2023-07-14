import { useState} from "react";
import { Outlet, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      {isLoggedIn ? <Navbar setIsLoggedIn={setIsLoggedIn}  /> : <Navigate to="/login" />}
      <Outlet context={{isLoggedIn, setIsLoggedIn}}/>
    </div>
  );
}

export default App;
