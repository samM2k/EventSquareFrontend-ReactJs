import React, { createContext, useContext, useState } from "react";
import { DrawerModel } from "./Models/DrawerModel";

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
        setVisible((prevVisible) => !prevVisible);
    };

    const setContent = (content) => {
        setDrawerContent(content);
    };

    const drawerModel = new DrawerModel(
        visible,
        drawerContent,
        show,
        hide,
        toggle,
        setContent,
    )

    return (
        <DrawerContext.Provider value={drawerModel}>
            {children}
        </DrawerContext.Provider>
    );
}
