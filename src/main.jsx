import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginModel from './Models/LoginModel.js'

var loginModel = new LoginModel();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App loginModel={loginModel} />
  </React.StrictMode>,
)
