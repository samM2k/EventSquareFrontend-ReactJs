import { Outlet, Link } from "react-router-dom";
import NavBar from './NavBar.jsx'
function Layout({ Authorized, OnLogout }) {
    return (
        <>
            <NavBar>

                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/contact">Contact</Link>

                {Authorized ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}
            </NavBar>
            <Outlet />
        </>
    )
};

export default Layout;