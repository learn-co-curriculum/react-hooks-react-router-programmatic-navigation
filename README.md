# Programmatic Navigation

## Learning Goals

- Understand the use cases for programmatic navigation
- Use the `useNavigate` hook to perform programmatic navigation
- Use the `<Navigate>` component to perform programmatic navigation

## Introduction

So far, we've used a couple components from React Router to allow our users to
navigate our React site: the `NavLink` and `Link` components. However, it would
also be useful to direct our users to another page **without** them needing to
click a link. For example:

- After logging in to the website, direct our user to the home page
- After logging out of the website, direct our user to the login page
- After creating a new item by filling out a form, direct our user to the detail
  page for that item

All of these actions require us to use **programmatic navigation** to change the
browser URL, and show the user a new page in our application, **without** making
the user click on a link.

**Note:** We have attached some files so you can see an example app in which
programmatic navigation has been implemented. While the basic functionality is
the same as what's described below, there are a number of differences for two
reasons: 1) the code in the lesson is substantially pared down to make it easier
to focus on the specific functionality being explained; and 2) the login/logout
functionality is mocked in the example app so you don't need to run a server. We
recommend that you read through the lesson first, focusing on understanding how
programmatic navigation works. Once you've done that, feel free to start up the
app and explore our example code.

## The useNavigate Hook

To enable programmatic navigation, we can use another custom hook from React
Router: the `useNavigate` hook. Here's how we could include it in a `NavBar`
component that allows people to logout of our website with the click of a
button. Once they've logged out, they'll be redirected to our `/login` page!

```jsx
import { useNavigate } from "react-router-dom";

function NavBar({ logout }) {
  const navigate = useNavigate();

  function handleLogout() {
    // logout the user
    logout();
    // then navigate them to the login page
    navigate("/login");
  }

  return (
    <nav>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
```

By calling `navigate()` and passing it the route we want to navigate to, we can
effectively navigate the user to a new page in response to **any** event in our
application, not just when the user clicks a link!

For another example, here's how you could use `navigate()` to redirect the user
after logging in:

```jsx
import { useNavigate } from 'react-router-dom';

function Login({ login }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((user) => {
        login(user);
        // after logging the user in, redirect to the home page!
        navigate("/home");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login</button>
    </form>
  );
}
```

## The Redirect Component

In addition to the `useNavigate` hook, React Router also provides a special
component for redirecting users to a new location: the `Navigate` component.
This component is particularly useful in cases where you need to handle some
conditional rendering. For example, in the App component below, we can render a
`Navigate` component that will navigate to the `/login` endpoint instead of our
`NavBar` component if the user is not logged in:

```jsx
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
```

## Conclusion

React Router gives us full control over how to navigate users around our
website. In general, the preferred approach is to use the `<Link>` and
`<NavLink>` components to let users perform navigation by clicking links.
However, there are certain scenarios when we want to navigate a user to a new
page after they perform some other type of action, like submitting a form or
logging out. React Router provides two tools to help us with these scenarios:
the `useNavigate` hook and the `<Navigate>` component.

## Resources

- [React Router useNavigate](https://reactrouter.com/en/main/hooks/use-navigate)
- [React Router
  History](https://reactrouter.com/en/main/start/concepts#history-and-locations)
- [Navigate](https://reactrouter.com/en/main/components/navigate)
