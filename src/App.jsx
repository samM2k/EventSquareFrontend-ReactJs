import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginModel from './Models/LoginModel.js'
import LoggedInView from './Views/LoggedInView'

function App() {
    const loginModel = new LoginModel();
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

    const handleLogin = () => {
        loginModel.Login("user@example.com", "Test123!")
            .then(result => setUserIsLoggedIn(result));
    }

    if (userIsLoggedIn) {
        return (
                <LoggedInView />
        );
    }
    else {

        return <>
            <button onClick={handleLogin}>Login</button>
        </>
    } 
}

export default App
