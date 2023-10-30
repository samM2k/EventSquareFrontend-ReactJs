import { useState } from 'react';
import './LoginView.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useToast } from '../ToastContext';

function LoginView() {
    const navigate = useNavigate();
    const authModel = useAuth();
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [validationErrorMessage, setValidationErrorMessage] = useState("");
    const toastModel = useToast();

    if (!authModel.isAuthenticated)
        return (
            <div className='login-view-container'>
                <div className="login-form">
                    <input id="email-input" type="email" placeholder="Email" value={emailInput} onChange={(arg) => setEmailInput(arg.target.value)} />
                    <input id="password-input" type="password" placeholder="Password" value={passwordInput} onChange={(arg) => setPasswordInput(arg.target.value)}></input>
                    <button onClick={() => authModel.login(emailInput, passwordInput).then(result => {
                        result ? toastModel.toast("Error occurred on login", result) : navigate("/");
                    }
                    )}>Login</button>
                </div>
            </div>
        );
    else
        return <Navigate to="/" />;
}

export default LoginView;