import { useState } from 'react';
import './LoginView.css';
function LoginView({ OnLogin }) {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    return (
        <div className="login-form">
            <input type="email" placeholder="Email" value={emailInput} onChange={(arg) => setEmailInput(arg.target.value)} />
            <input type="password" placeholder="Password" value={passwordInput} onChange={(arg) => setPasswordInput(arg.target.value)}></input>
            <button onClick={() => OnLogin(emailInput, passwordInput)}>Login</button>
        </div>
    );
}

export default LoginView;