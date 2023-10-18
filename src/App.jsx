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
import LogoutView from './Views/LogoutView'
import EventsView from './Views/EventsView'

function App({ loginModel }) {
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

    async function handleLogin(email, password) {
        var result = await loginModel.Login(email, password);
        setUserIsLoggedIn(result);
        return result;
    }

    async function logoutCallbackAsync() {
        var response = await loginModel.Logout()
        setUserIsLoggedIn(!response);
        return response;
    }



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout Authorized={userIsLoggedIn} />}>
                    <Route index element={< Home IsAuthorized={userIsLoggedIn} />} />
                    <Route path="login" element={<LoginView OnLogin={handleLogin} />} />
                    <Route path="logout" element={<LogoutView LogoutFunction={logoutCallbackAsync} />} />
                    <Route path="events" element={<EventsView IsAuthorized={userIsLoggedIn} />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
