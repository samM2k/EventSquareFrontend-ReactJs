import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthorizedView from './Views/AuthorizedView'
import LoginView from './Views/LoginView'

function App({loginModel }) {
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
    function handleLogin(email, password) {
        loginModel.Login(email, password)
            .then(result => setUserIsLoggedIn(result));
    }

    function logoutCallback() {
        loginModel.Logout().then(a => setUserIsLoggedIn(false));
    }

    if (userIsLoggedIn) {
        return (
            <AuthorizedView OnLogoutClicked={logoutCallback} />
        );
    }
    else {

        return <>
            <LoginView OnLogin={handleLogin} />
        </>
    }
}

export default App
