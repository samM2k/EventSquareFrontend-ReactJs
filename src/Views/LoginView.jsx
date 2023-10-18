import { useState } from 'react';
import './LoginView.css';
import { useNavigate } from 'react-router-dom';

function LoginView({ OnLogin }) {
    const navigate = useNavigate();

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [validationErrorMessage, setValidationErrorMessage] = useState("");
    var showValidationError = (error)=>{
        setValidationErrorMessage(error)
        setTimeout(() => { setValidationErrorMessage("") }, 2000);
    }
    const handleLogin = async() => {
        var response = await OnLogin(emailInput, passwordInput)
            response ? navigate("/") : showValidationError("An error occurred during login.");
    }

    return (
        <div className="login-form">
            <input type="email" placeholder="Email" value={emailInput} onChange={(arg) => setEmailInput(arg.target.value)} />
            <input type="password" placeholder="Password" value={passwordInput} onChange={(arg) => setPasswordInput(arg.target.value)}></input>
            <button onClick={handleLogin}>Login</button>
            <span className="validation-error">{validationErrorMessage}</span>
        </div>
    );
}

export default LoginView;