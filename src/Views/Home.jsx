import React from 'react';
import AuthorizedView from './AuthorizedView';
import { Navigate } from 'react-router-dom';

function Home({ IsAuthorized }) {
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