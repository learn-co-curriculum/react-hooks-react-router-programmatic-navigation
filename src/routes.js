import App from './App';
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";


const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            }, 
            {
                path: '/about',
                element: <About />
            },  
            {
                path: '/login',
                element: <Login />
            }, 
        ]
    }

]

export default routes;