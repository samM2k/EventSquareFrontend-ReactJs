import { useState } from "react";
import './Drawer.css'

function Drawer({ buttonLabel, children }) {

    const [visible, setVisible] = useState(false);

    function toggleDrawer() {
        setVisible(!visible);
    }

    return (
        <>
            <div className={visible ? "drawer bg-dark visible" : "drawer bg-dark"} >
                {children}
            </div>
            <button onClick={toggleDrawer}>{buttonLabel}</button>
        </>
    );
}

export default Drawer;