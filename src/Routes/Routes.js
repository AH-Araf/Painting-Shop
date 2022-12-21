import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";
import Paint1 from "../Pages/Paint1";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path:'/paint1',
                element: <Paint1></Paint1>,
            },
        ]
    }
])