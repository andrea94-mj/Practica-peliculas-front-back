import { createBrowserRouter } from "react-router-dom";

import Catalogo from "../pages/Catalogo";
import Login from "../pages/Login";
import Add from "../pages/Add";

import Layout from "../Layout";



const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,

    children: [
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
        }
    ]
}]);

export default router;