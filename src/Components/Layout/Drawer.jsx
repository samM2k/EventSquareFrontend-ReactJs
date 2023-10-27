import { useEffect, useState } from "react";
import './Drawer.css'

function Drawer() {
    const [visible, setVisibility] = useState(false);
    const [children, setChildren] = useState(<></>);
    useEffect(() => {
        window.Drawer =
        {
            show: () => {
                setVisibility(true);
            },
            hide: () => {
                setVisibility(false);
            },
            toggle: () => {
                setVisibility(!visible);
            },
            setChildren: (newChildren) => setChildren(newChildren),
        }
    }, [])

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
        </>
    );
}

export default Drawer;