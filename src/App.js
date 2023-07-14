import { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // if (!isLoggedIn) return <Navigate to="/login" />;
  // useEffect(() =>{
  //   if (!isLoggedIn){
  //     navigate("/login")
  //   }
  // }, [])
  

  return (
    <div className="app">
      {/* <Navbar setIsLoggedIn={setIsLoggedIn}  /> */}
      {/* <Navigate to="/login" /> */}
      {isLoggedIn ? <Navbar setIsLoggedIn={setIsLoggedIn}  /> : <Navigate to="/login" />}
      <Outlet context={{isLoggedIn, setIsLoggedIn}}/>
    </div>
  );
}

export default App;
