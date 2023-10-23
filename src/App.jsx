import { useEffect, useState } from 'react'
import './App.css'
import LoginView from './Views/LoginView'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from './Views/PageNotFound'
import Home from './Views/Home'
import Layout from './Views/Layout'
import LogoutView from './Views/LogoutView'
import EventsView from './Views/EventsView'
import ApiClient from './Helpers/ApiClient';
import NewEventView from './Views/NewEventView';
import config from './config.js';

function App() {
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

    function pullMapsApi() {
        (g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })
            ({ key: config.googleMapsApiKey, v: "weekly" })
    }

    useEffect(() => {
        pullMapsApi();
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
