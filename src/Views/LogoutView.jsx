import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useToast } from '../ToastContext';

function LogoutView() {
    const authModel = useAuth();
    const [logoutComplete, setLogoutComplete] = useState(false);
    const toastModel = useToast();

    useEffect(() => {
        if (!logoutComplete)
            authModel.logout().then(result => {
                if (result) {
                    toastModel.toast("Error", result)
                } else {
                    setLogoutComplete(true);
                }
            });
    }, [logoutComplete]);

    if (!logoutComplete) {
        return (
            <p>Signing out...</p>
        );
    }

    return (
        <Navigate to="/" />
    )
}

export default LogoutView;