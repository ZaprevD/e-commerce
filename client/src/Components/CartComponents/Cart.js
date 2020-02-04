import React from "react";
import CartInfo from "./Partials/CartInfo";

const Cart = (props) => {


return (
    localStorage.currentUser ?
        <div className="cart-view">
            <CartInfo  />
        </div>
        : window.location.href = "/login"
)
}

export default Cart;