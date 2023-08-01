import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Login() {
  const login = useOutletContext();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  console.log('navigated to login')

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();
    login();
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <input type="submit" value="Login"/>
    </form>
  );
}

export default Login;
