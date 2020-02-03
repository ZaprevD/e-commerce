import React from "react";

const RegisterForm = (props) => {

    return (
        <form onSubmit={props.register}>
            <h2>Register</h2>
            <div className="form-content">
                <input onChange={props.change} type="text" placeholder="First Name" name="firstName" />
                <input onChange={props.change} type="text" placeholder="Last Name" name="lastName" />
                <input onChange={props.change} type="text" placeholder="Email" name="email" />
                <input onChange={props.change} type="password" placeholder="Password" name="password" />
                <button type="submit">Register</button>
            </div>
        </form>
    )
}

export default RegisterForm;