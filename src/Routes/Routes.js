import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog";
import BulkOrder from "../Pages/BulkOrder";
import Home from "../Pages/Home";
import Paint1 from "../Pages/Paint1";
import Paint2 from "../Pages/Paint2";
import Paint3 from "../Pages/Paint3";
import Paint4 from "../Pages/Paint4";
import Shop from "../Pages/Shop";

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
            {
                path:'/paint2',
                element: <Paint2></Paint2>,
            },
            {
                path:'/paint3',
                element: <Paint3></Paint3>,
            },
            {
                path:'/paint4',
                element: <Paint4></Paint4>,
            },
            {
                path:'/shop',
                element: <Shop></Shop>,
            },
            {
                path:'/bulk',
                element: <BulkOrder></BulkOrder>,
            },
            {
                path:'/blog',
                element: <Blog></Blog>,
            },
        ]
    }
])