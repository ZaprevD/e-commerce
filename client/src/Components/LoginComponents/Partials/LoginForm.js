import React from "react";

const LoginForm = (props) => {

    return (
        <form onSubmit={props.login}>
            <h2>Login</h2>
            <div className="form-content">
                <input onChange={props.onEmailChange} type="text" placeholder='Email' name="email" />
                <input onChange={props.onPasswordChange} type="password" placeholder='Password' name="password" />
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

export default LoginForm;