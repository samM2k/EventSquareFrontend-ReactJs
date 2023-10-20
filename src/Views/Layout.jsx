import { Outlet, Link } from "react-router-dom";
import NavBar from '../Components/NavBar.jsx'
import './Layout.css';
import NavBarItem from "../Models/NavBarItem.js";

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
            <NavBar items={navbarItems} />
            <div className="layout-main">
                <Outlet />
            </div>
        </>
    )
};

export default Layout;