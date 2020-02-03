import React from "react"

const CartItems = (props) => {

    return (
        <div className="cart-item">
            <div className="inf-holder">
                <h3>{props.name}</h3>
            </div>
            <div className="inf-holder">
               <h2>{props.price + "$"}</h2>
            </div>  
            <div className="inf-holder">
                <h4>{props.categoryName}</h4>
            </div>
            <button className="pay-btn"> Pay Now </button>
        </div>
    )

}
export default CartItems;