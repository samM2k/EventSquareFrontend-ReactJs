import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function LogoutView() {
    const authModel = useAuth();
    const [logoutComplete, setLogoutComplete] = useState(false);

    useEffect(() => {
        if (!logoutComplete)
            authModel.logout().then(result => {
                if (result) {
                    window.Toast("Error", result)
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