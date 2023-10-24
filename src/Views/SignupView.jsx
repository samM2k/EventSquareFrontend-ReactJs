import { useState } from 'react';
import './SignupView.css';
import { Navigate, useNavigate } from 'react-router-dom';
import ApiClient from '../Helpers/ApiClient';

function SignupView({ Authenticated, SignupFunction }) {
    const navigate = useNavigate();
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    const [validationErrorMessage, setValidationErrorMessage] = useState("");
    var showValidationError = (error) => {
        setValidationErrorMessage(error)
        setTimeout(() => { setValidationErrorMessage("") }, 5000);
    }

    if (!Authenticated)
        return (
            <div className='signup-view-container'>
                <div className="signup-form">
                    <input id="email-input" type="email" placeholder="Email" value={emailInput} onChange={(arg) => setEmailInput(arg.target.value)} />
                    <input id="password-input" type="password" placeholder="Password" value={passwordInput} onChange={(arg) => setPasswordInput(arg.target.value)}></input>
                    <input id="confirm-password-input" type="password" placeholder="Confirm Password" value={confirmPasswordInput} onChange={(arg) => setConfirmPasswordInput(arg.target.value)}></input>
                    <button onClick={() => {
                        if (passwordInput != confirmPasswordInput) {
                            showValidationError("Error: Passwords do not match.")
                            return;
                        }

                        if (!passwordInput || !emailInput) {
                            showValidationError("Error: Missing username or password")
                            return;
                        }

                        SignupFunction(emailInput, passwordInput).then(result => {
                            if (!result.Success) {
                                showValidationError("Error occurred on attempting signup: " + result.Body);
                            } else {
                                navigate("/");
                            }
                        });
                    }}>Register</button>
                    <span className="validation-error">{validationErrorMessage}</span>
                </div>
            </div>
        );
    else
        return <Navigate to="/" />;
}

export default SignupView;