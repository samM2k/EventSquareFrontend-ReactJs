import { Outlet, Link } from "react-router-dom";
import NavBar from '../Components/Layout/NavBar.jsx'
import './Layout.css';
import NavBarItem from "../DataTypes/NavBarItem.js";
import Toast from "../Components/Layout/Toast.jsx";
import Drawer from "../Components/Layout/Drawer.jsx";
import { useAuth } from "../AuthContext.jsx";
import { useEffect, useState } from "react";

function Layout() {
    const authModel = useAuth();

    var navbarItems = [
        new NavBarItem("Home", "/"),
        new NavBarItem("Events", "/events"),
    ];

    if (authModel.isAuthorized) {
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
            <Drawer />
            <NavBar items={navbarItems} />
            <div className="layout-main">
                <Outlet />
            </div>
        </>
    )
};

export default Layout;