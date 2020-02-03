import React, { Component } from "react";
import RegisterForm from "./Partials/RegisterForm"
import { registerUser } from "../UserFunctions";
class Register extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    register = async (e) => {
        e.preventDefault();
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }
        await registerUser(newUser);
        this.props.history.push("/login");
    }

    changeEventHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                {!localStorage.currentUser ? <RegisterForm change={this.changeEventHandler}
                    register={this.register} /> : this.props.history.push("/profile")}
            </div>
        )
    }
}

export default Register;