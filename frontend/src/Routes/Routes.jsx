import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Root/Root";
import AddItem from "../pages/AddItem/AddItem";
import CardDetails from "../pages/CardDetails/CardDetails";
let route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:title',
                element: <CardDetails></CardDetails>
            }
        ]
    },

    {
        path: '/addCard',
        element: <AddItem></AddItem>
    }

])

export default route