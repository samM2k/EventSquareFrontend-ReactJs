import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function LogoutView({ LogoutFunction }) {
    const [logoutComplete, setLogoutComplete] = useState(false);

    useEffect(() => {
        if (!logoutComplete)
            LogoutFunction().then(result => {
                if (!result.Success)
                    showValidationError(err)
                setLogoutComplete(true);
            });
    }, [logoutComplete, LogoutFunction]);

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