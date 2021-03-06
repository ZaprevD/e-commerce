import React from "react";
import { NavLink } from 'react-router-dom';

const UserRoutes = (props) => {

    const currentUser = JSON.parse(localStorage.currentUser);
    return (
        <ul className="main-nav profile">
            <li><NavLink className="link-btn" to="/products">Products</NavLink></li>
            <li className="link-btn">{currentUser.firstName}
                <ul className="main-drop-down">
                    <li><NavLink className="link-btn" to="/profile">Profile</NavLink></li>
                    <li><NavLink className="link-btn" to="/cart">Cart</NavLink></li>
                    <li><NavLink onClick={props.logout} className="link-btn" to="/login">Logout</NavLink></li>
                </ul>
            </li>
        </ul>
    )
};

export default UserRoutes;