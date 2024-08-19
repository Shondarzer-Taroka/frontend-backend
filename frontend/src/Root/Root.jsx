import { Outlet } from "react-router-dom";
import Nav from "../pages/Nav/Nav";
import FooterPage from "../pages/Footer/FooterPage";


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <FooterPage/>
            {/* <Home></Home> */}
        </div>
    );
};

export default Root;