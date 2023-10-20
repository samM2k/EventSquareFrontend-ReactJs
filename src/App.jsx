import { useEffect, useState } from 'react'
import './App.css'
import LoginView from './Views/LoginView'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from './Views/PageNotFound'
import Home from './Views/Home'
import Layout from './Views/Layout'
import LogoutView from './Views/LogoutView'
import EventsView from './Views/EventsView'
import ApiClient from './Models/ApiClient';
import NewEventView from './Views/NewEventView';

function App({ loginModel }) {
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

    useEffect(() => {
        ApiClient.validateSession().then(result => {
            setUserIsLoggedIn(result.Success)
        });
    }, [])

    async function logoutFunction() {
        var result = await ApiClient.logout();
        setUserIsLoggedIn(!result.Success);
        return result;
    }


    async function loginFunction(email, password) {
        var result = await ApiClient.login(email, password);
        setUserIsLoggedIn(result.Success);
        return result;
    }


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout Authorized={userIsLoggedIn} />}>
                    <Route index element={< Home IsAuthorized={userIsLoggedIn} />} />
                    <Route path="login" element={<LoginView LoginFunction={loginFunction} Authenticated={userIsLoggedIn} />} />
                    <Route path="logout" element={<LogoutView LogoutFunction={logoutFunction} />} />
                    <Route path="events" element={<EventsView IsAuthorized={userIsLoggedIn} />} />
                    <Route path="events/new" element={<NewEventView IsAuthorized={userIsLoggedIn} />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
