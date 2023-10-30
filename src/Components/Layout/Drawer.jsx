// Drawer.js
import React from "react";
import './Drawer.css';
import { useDrawer } from "../../DrawerContext";

function Drawer() {
    const drawer = useDrawer();

    return (
        <>
            <div id="drawer-container" className={drawer.visible ? "" : "display-none"} >
                <div id="drawer" className={"drawer bg-dark"}>
                    {drawer.content}
                </div>
                <div onClick={drawer.hide} id="touch-space"></div>
            </div>
        </>
    );
}

export default Drawer;
