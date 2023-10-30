// Drawer.js
import React from "react";
import './Drawer.css';
import { useDrawer } from "../../DrawerContext";

function Drawer() {
    const { drawerContent, visible, hide } = useDrawer();

    return (
        <>
            <div id="drawer-container" className={visible ? "" : "display-none"} >
                <div id="drawer" className={"drawer bg-dark"}>
                    {drawerContent}
                </div>
                <div onClick={hide} id="touch-space"></div>
            </div>
        </>
    );
}

export default Drawer;
