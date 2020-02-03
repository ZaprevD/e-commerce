import React, { useState } from "react";
import LoginForm from "./Partials/LoginForm";
import { loginUser } from "../UserFunctions";
const Login = (props) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const emailChange = e => setEmail(e.target.value);
    const passwordChange = e => setPassword(e.target.value);

    const login = async (e) => {
        e.preventDefault();
        const user = {
            email: email,
            password: password
        }
        await loginUser(user)
        window.location.href = "/profile";
    }
    return (
        <div>
          {!localStorage.currentUser?   <LoginForm onEmailChange={emailChange}
           onPasswordChange={passwordChange} login={login} /> : window.location.href="/profile" }
        </div>
    )
}

export default Login;