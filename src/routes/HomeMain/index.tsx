import { Outlet } from "react-router-dom";
import HeaderGT from "../../components/HeaderGt";

export default function HomeMain() {
    return (
        <div className="home-main-container">
            <HeaderGT />
            <Outlet />
        </div>
    );
}