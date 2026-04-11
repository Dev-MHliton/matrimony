import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";

const Main = () => {

    // location setup 
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>

            {/* Outlet  */}
            <Outlet></Outlet>

            {/* Footer  */}
            {noHeaderFooter || < Footer ></Footer>}

        </div >
    );
};

export default Main;