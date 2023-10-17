import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginModel from './Models/LoginModel.js'
import LoggedInView from './Views/LoggedInView'

function App() {
    const loginModel = new LoginModel();
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    function handleLogin() {
        loginModel.Login(emailInput, passwordInput)
            .then(result => setUserIsLoggedIn(result));
    }

    function logoutCallback() {
        loginModel.Logout().then(a => setUserIsLoggedIn(false));
    }

    if (userIsLoggedIn) {
        return (
            <LoggedInView OnLogoutClicked={logoutCallback} />
        );
    }
    else {

        return <>
            <input type="email" placeholder="Email" value={emailInput} onChange={(arg) => setEmailInput(arg.target.value) } />
            <input type="password" placeholder="Password" value={passwordInput} onChange={(arg) => setPasswordInput(arg.target.value)}></input>
            <button onClick={handleLogin}>Login</button>
        </>
    }
}

export default App
