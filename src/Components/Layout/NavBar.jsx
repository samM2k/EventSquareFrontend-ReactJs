import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar({ items }) {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className={location.pathname == "/" ? 'navbar-toggler hidden' : 'navbar-toggler'} onClick={() => navigate(-1)}><ion-icon name="chevron-back" id="back-icon" /></button>
            <Link className="navbar-brand" to="/">EventSquare</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {items.map(item => {
                        return <div key={items.indexOf(item)} className="navbar-item">
                            <Link key={item.Label} className="nav-link" to={item.Href}>{item.Label}</Link>
                        </div>
                    })}
                </ul>
            </div>

        </nav>
    );
}

export default NavBar;