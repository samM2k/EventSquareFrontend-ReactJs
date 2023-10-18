import { Outlet, Link } from "react-router-dom";
import NavBar from './NavBar.jsx'
import './Layout.css';
import NavBarItem from "../Models/NavBarItem.js";

function Layout({ Authorized }) {
    var navbarItems = [
        new NavBarItem("Home", "/"),
        new NavBarItem("Blogs", "/blogs"),
        new NavBarItem("Contact", "/contact"),
    ];

    if (Authorized) {
        navbarItems.push(new NavBarItem("Logout", "/logout"));
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