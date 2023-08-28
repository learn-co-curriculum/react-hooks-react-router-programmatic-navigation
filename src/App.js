import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {


  return (
    <div className="app">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
