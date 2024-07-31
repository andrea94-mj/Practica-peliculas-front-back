import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Catalogo from "../pages/Catalogo";
import Login from "../pages/Login";
import Add from "../pages/Add";
import ErrorPage from "../Error-page";

import Layout from "../Layout";



const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,

    children: [
        {
            path: "home",
            element: <Home/>
        },
        {
            path: "catalogo",
            element: <Catalogo/>
        },
        {
            path: "login",
            element: <Login/>
        },
        {
            path: "add",
            element: <Add/>
        },
        {
            path: "errorPage",
            element: <ErrorPage/>
        }
    ]
}]);

export default router;