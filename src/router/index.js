import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../components/Main";
import Home from "../components/main/home/LandingPage";
import Login from "../components/main/login/Login";
import Student from "../components/student/Student";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
    {
        path: "/student/:email",
        element: <Student />,
    },
]);

function Components() {
    return <RouterProvider router={routes} />;
}

export default Components;
