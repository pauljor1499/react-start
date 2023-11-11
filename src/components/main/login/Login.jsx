import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailChange = (e) => {
        setEmail(e.target.value);
    };

    const passwordChange = (e) => {
        setPassword(e.target.value);
    };

    const clickLogin = (e) => {
        navigate(`/student/${email}`, { state: { data: "HAKDOG" } });
    };

    return (
        <div>
            <div className="login-content">
                <h3>Login</h3>
                <div className="content-field">
                    <span>Email</span>
                    <input value={email} onChange={emailChange} type="text" placeholder="email" />
                </div>
                <div className="content-field">
                    <span>Password</span>
                    <input
                        value={password}
                        onChange={passwordChange}
                        type="text"
                        placeholder="password"
                    />
                </div>
                <button onClick={clickLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;
