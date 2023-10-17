import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginModel from './Models/LoginModel.js'


function App() {
    const [count, setCount] = useState(0)
    const [loginModel, setLoginModel] = useState(null);
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

    useEffect(() => {
        if (!loginModel) {
            const newLoginModel = new LoginModel();
            setLoginModel(newLoginModel);
        }
    }, [])

    if (userIsLoggedIn)
        return (
            <>
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <button >
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </>
        );
    else 
        return <>
            <button onClick={function() {
                loginModel.Login("user@example.com", "Test123!").then(() => setUserIsLoggedIn(loginModel.UserIsLoggedIn))
            }
            }>Login</button>
        </>
}

export default App
