import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
    return (
        <div className="bg-[#F2F2F2]">
            <NavBar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;