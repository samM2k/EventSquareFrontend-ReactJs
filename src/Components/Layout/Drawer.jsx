import { useEffect, useState } from "react";
import './Drawer.css'

function Drawer({ visible, setVisibility, buttonLabel, children }) {

    function toggleDrawer() {
        setVisibility(!visible);
    }

    return (
        <>
            <div id="drawer" className={visible ? "drawer bg-dark visible" : "drawer bg-dark"} >
                {children}
            </div>
            <button onClick={toggleDrawer}>{buttonLabel}</button>
        </>
    );
}

export default Drawer;