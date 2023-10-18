import { Outlet, Link } from "react-router-dom";

function Layout({ Authorized, OnLogout }) {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    {Authorized ? <button onClick={OnLogout}>Logout</button> : <p>loggedOut</p>}
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;