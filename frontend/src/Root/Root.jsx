import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import Nav from "../pages/Nav/Nav";


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            {/* <Home></Home> */}
        </div>
    );
};

export default Root;