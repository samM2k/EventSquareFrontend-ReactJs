import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function LogoutView({LogoutFunction }) {
    const [logoutComplete, setLogoutComplete] = useState(false);
    if (!logoutComplete) {
        LogoutFunction().then(result => {
            if (result = true) {
                setLogoutComplete(true);
            }
        })
        return (
            <p>Signing out...</p>
        );
    }

    return (
        <Navigate to="/" />
    )
}

export default LogoutView;