import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthorizedView from './Views/AuthorizedView'
import LoginView from './Views/LoginView'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from './Views/PageNotFound'
import Home from './Views/Home'
import Layout from './Views/Layout'

function App({ loginModel }) {
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

    function handleLogin(email, password) {
        loginModel.Login(email, password)
            .then(result => setUserIsLoggedIn(result));
    }

    function logoutCallback() {
        loginModel.Logout().then(a => setUserIsLoggedIn(false));
    }



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout Authorized={userIsLoggedIn} OnLogout={logoutCallback} />}>
                    <Route index element={< Home IsAuthorized={userIsLoggedIn} />} />
                    <Route path="login" element={<LoginView OnLogin={ handleLogin } />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );


    //if (userIsLoggedIn) {
    //    return (
    //        <AuthorizedView OnLogoutClicked={logoutCallback} />
    //    );
    //}
    //else {

    //    return <>
    //        <LoginView OnLogin={handleLogin} />
    //    </>
    //}
}

export default App
