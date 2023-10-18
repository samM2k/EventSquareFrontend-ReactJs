import { useState } from 'react';
import './LoginView.css';
import { Navigate, useNavigate } from 'react-router-dom';

function LoginView({ Authenticated, LoginFunction }) {
    const navigate = useNavigate();

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [validationErrorMessage, setValidationErrorMessage] = useState("");
    var showValidationError = (error) => {
        setValidationErrorMessage(error)
        setTimeout(() => { setValidationErrorMessage("") }, 2000);
    }
    if (!Authenticated)
        return (
            <div className="login-form">
                <input id="email-input" type="email" placeholder="Email" value={emailInput} onChange={(arg) => setEmailInput(arg.target.value)} />
                <input id="password-input" type="password" placeholder="Password" value={passwordInput} onChange={(arg) => setPasswordInput(arg.target.value)}></input>
                <button onClick={() => LoginFunction(emailInput, passwordInput).then(result => {
                    result.Success ? navigate("/") : showValidationError(result.Body)
                }
                )}>Login</button>
                <span className="validation-error">{validationErrorMessage}</span>
            </div>
        );
    else
        return <Navigate to="/" />;
}

export default LoginView;