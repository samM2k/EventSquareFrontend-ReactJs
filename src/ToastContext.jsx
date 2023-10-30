import React, { createContext, useContext, useState } from "react";
import { ToastModel } from "./Models/ToastModel";

const ToastContext = createContext();

export function useToast() {
    return useContext(ToastContext);
}

export function ToastProvider({ children }) {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("Some text inside the toast body");
    const [header, setHeader] = useState("Toast Header");
    const [minutesAgo, setMinutesAgo] = useState(0);

    const toastModel = new ToastModel(
        visible,
        message,
        header,
        minutesAgo,
        setVisible,
        setMessage,
        setHeader,
        setMinutesAgo
    )

    return (
        <ToastContext.Provider value={toastModel}>
            {children}
        </ToastContext.Provider>
    );
}
