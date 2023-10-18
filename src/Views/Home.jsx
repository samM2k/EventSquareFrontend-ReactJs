import React from 'react';
import AuthorizedView from './AuthorizedView';
import { useNavigate, Navigate } from 'react-router-dom';

function Home({ IsAuthorized }) {
    const navigate = useNavigate();

    if (!IsAuthorized) {
        return (
            <Navigate to="/login" />
        );
    } else {
        return (
            <AuthorizedView />
        );
    }

}

export default Home;