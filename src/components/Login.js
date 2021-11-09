import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Data from "./components/Data";
import React, { useState } from "react"
import gdrivelogo from "./glogo.png"
import { auth, provider } from "./firebase"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState(null);
    const signIn = () => {
        auth.signInWithPopup(provider).then(({ user }) => {
            setUser(user);
        }).catch(error => {
            alert(error.message);
        })
    }
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/Login">
                        <div className="loginwrap">
                            <img src={gdrivelogo} />
                            <button onClick={signIn}>Login to E-Drive</button>
                        </div>
                    </Route>
                </Routes>
            </Router>
        </>
    )
}
