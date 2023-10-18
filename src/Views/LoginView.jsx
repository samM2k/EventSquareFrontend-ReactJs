import { useState } from 'react';
import './LoginView.css';
import { useNavigate } from 'react-router-dom';

function LoginView({ OnLogin }) {
    const navigate = useNavigate();

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const handleLogin = () => {
        OnLogin(emailInput, passwordInput).then(a => a ? navigate("/") : null);
    }

    return (
        <div className="login-form">
            <input type="email" placeholder="Email" value={emailInput} onChange={(arg) => setEmailInput(arg.target.value)} />
            <input type="password" placeholder="Password" value={passwordInput} onChange={(arg) => setPasswordInput(arg.target.value)}></input>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginView;