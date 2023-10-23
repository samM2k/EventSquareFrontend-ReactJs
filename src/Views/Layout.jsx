import { Outlet, Link } from "react-router-dom";
import NavBar from '../Components/Layout/NavBar.jsx'
import './Layout.css';
import NavBarItem from "../Models/NavBarItem.js";
import Toast from "../Components/Layout/Toast.jsx";

function Layout({ Authorized }) {
    var navbarItems = [
        new NavBarItem("Home", "/"),
        new NavBarItem("Events", "/events"),
    ];

    if (Authorized) {
        navbarItems.push(new NavBarItem("Logout", "/logout"))
    } else {
        navbarItems = navbarItems.concat([
            new NavBarItem("Login", "/login"),
            new NavBarItem("Signup", "/signup"),
        ]);
    }

    return (
        <>
            <script noModule="" src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js"></script>
            <Toast />
            <NavBar items={navbarItems} />
            <div className="layout-main">
                <Outlet />
            </div>
        </>
    )
};

export default Layout;