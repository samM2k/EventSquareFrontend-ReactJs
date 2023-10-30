import React, { createContext, useContext, useEffect, useState } from 'react';
import AuthModel from './Models/AuthModel';

const authModel = new AuthModel();
const AuthContext = createContext(authModel);

export function useAuth() {
    return useContext(AuthContext);
}

function AuthProvider({ children }) {

    useEffect(() => {
        authModel.validate();
    }, []);

    return (
        <AuthContext.Provider value={ authModel }>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
