# Programmatic Navigation

## Learning Goals

- Understand the use cases for programmatic navigation
- Use the `useHistory` hook to perform programmatic navigation
- Use the `<Redirect>` component to perform programmatic navigation

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
app and explore a (mostly) working example.

## The useHistory Hook

To solve this problem, we can use another custom hook from React Router: the
`useHistory` hook. Here's how it looks:

```jsx
import { useHistory } from "react-router-dom";

function NavBar({ onLogout }) {
  const history = useHistory();

  function handleClick() {
    // logout the user
    onLogout();
    // then navigate them to the login page
    history.push("/login");
  }

  return (
    <nav>
      <button onClick={handleClick}>Logout</button>
    </nav>
  );
}
```

By calling `history.push()`, we can effectively navigate the user to a new page
in response to **any** event in our application, not just when the user clicks a
link!

For another example, here's how you could use `history.push()` to redirect the
user after logging in:

```jsx
function Login({ onLogin }) {
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
        onLogin(user);
        // after logging the user in, redirect to the home page!
        history.push("/home");
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

In addition to the `useHistory` hook, React Router also provides a special
component for redirecting users to a new location: the `Redirect` component.
This component is particularly useful in cases where you need to handle some
conditional rendering. For example:

```jsx
function Home({ isSignedIn }) {
  // if the user isn't signed in, redirect them to the login page
  if (!isSignedIn) return <Redirect to="/login" />;

  // otherwise, return the home page
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}
```

## Conclusion

React Router gives us full control over how to navigate users around our
website. In general, the preferred approach is to use the `<Link>` and
`<NavLink>` components to let users perform navigation by clicking links.
However, there are certain scenarios when we want to navigate a user to a new
page after they perform some other type of action, like submitting a form or
logging out. React Router provides two tools to help us with these scenarios:
the `useHistory` hook and the `<Redirect>` component.

## Resources

- [React Router Hooks](https://v5.reactrouter.com/web/api/Hooks)
- [React Router history object](https://v5.reactrouter.com/web/api/history)
- [Redirect](https://v5.reactrouter.com/web/api/Redirect)
