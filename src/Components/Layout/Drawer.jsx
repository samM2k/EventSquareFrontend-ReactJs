import { useEffect, useState } from "react";
import './Drawer.css'

function Drawer({ visible, setVisibility, buttonLabel, children }) {

    function toggleDrawer() {
        setVisibility(!visible);
    }

    return (
        <>
            <div id="drawer-container" className={visible ? "" : "display-none"} >
                <div id="drawer" className={"drawer bg-dark"}>
                    {children}
                </div>
                <div onClick={() => {
                    setVisibility(false);
                }} id="touch-space"></div>
            </div>
            <button onClick={toggleDrawer}>{buttonLabel}</button>
        </>
    );
}

export default Drawer;