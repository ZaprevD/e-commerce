import React from "react"
import { NavLink } from 'react-router-dom';

const DefaultRoutes = () => {

    return (
        <ul className="main-nav">
            <li><NavLink className="link-btn" to="/products">Products</NavLink></li>
            <li><NavLink className="link-btn" to="/login">Login</NavLink></li>
            <li><NavLink className="link-btn" to="/register">Register</NavLink></li>
        </ul>
    )
}

export default DefaultRoutes;