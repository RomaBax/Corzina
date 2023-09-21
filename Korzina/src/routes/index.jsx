import { createBrowserRouter } from "react-router-dom";
import { Products } from "../pages/product";
import { Basket } from "../pages/Basket";
import { Layout } from "../layout/layout";

export const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
    {
        path:'/',
        element:<Products/>
    },
    {
        path:'/basket',
        element:<Basket/>
    },
]
}
])