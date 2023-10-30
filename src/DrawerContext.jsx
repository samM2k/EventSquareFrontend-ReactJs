// DrawerContext.js
import React, { createContext, useContext, useState } from "react";

const DrawerContext = createContext();

export function useDrawer() {
    return useContext(DrawerContext);
}

export function DrawerProvider({ children }) {
    const [visible, setVisible] = useState(false);
    const [drawerContent, setDrawerContent] = useState(<></>);

    const show = () => {
        setVisible(true);
    };

    const hide = () => {
        setVisible(false);
    };

    const toggle = () => {
        setVisible(!visible);
    };

    return (
        <DrawerContext.Provider value={{ visible, show, hide, toggle, drawerContent, setDrawerContent }}>
            {children}
        </DrawerContext.Provider>
    );
}
