import { Outlet } from "react-router-dom";
import Footer from "../Routes/Shared/Footer/Footer";
import Navbar from "../Routes/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div  className="max-w-6xl  mx-auto font-poppins mt-10">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;