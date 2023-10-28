import { useEffect, useState } from 'react'
import './App.css'
import LoginView from './Views/LoginView'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from './Views/PageNotFound'
import Home from './Views/Home'
import Layout from './Views/Layout'
import LogoutView from './Views/LogoutView'
import EventsView from './Views/EventsView'
import NewEventView from './Views/NewEventView';
import config from './config.js';
import EventDetailsView from './Views/EventDetailsView';
import SignupView from './Views/SignupView';
import AuthModel from './Models/AuthModel';
import AuthProvider, { useAuth } from './AuthContext';

function App() {
    const authModel = useAuth();
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);


    function pullMapsApi() {
        (g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })
            ({ key: config.googleMapsApiKey, v: "weekly" })
    }

    useEffect(() => {
        authModel.setLoginStateChangedCallback(setUserIsLoggedIn);

        pullMapsApi();

        authModel.validate();
    }, [])

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={< Home />} />
                        <Route path="login" element={<LoginView />} />
                        <Route path="signup" element={<SignupView />} />
                        <Route path="logout" element={<LogoutView />} />
                        <Route path="events" element={<EventsView />} />
                        <Route path="events/new" element={<NewEventView />} />
                        <Route path="events/:id" element={<EventDetailsView />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App
