import React from "react";
import axios from "axios";

const ProductInfo = (props) => {

    const addToCart = () => {
        let user;
        localStorage.currentUser ? user = JSON.parse(localStorage.currentUser) : window.location.href = "/login";
        return axios.post(`/cart/${user.Id}/additem/${props.productId}`, {}, {
            'headers': {
                'authorization': `Bearer ${user.token}`
            }
        }).then(props.rerender).catch(err => console.log(err))
    }

    return (
        <div className="product-cart">
            <div className="cart-header">
                <h3>{props.desc}</h3>
            </div>
            <div className="cart-price">
                <h3>{props.price + "$"}</h3>
            </div>
            <div className="cart-price">
                <h4>{props.category}</h4>
            </div>
            <div className="cart-footer">
                {props.isSold ? <h3>Item Sold</h3> :
                    <div>
                        <button disabled={props.isSold}>Buy Now</button>
                        <button disabled={props.isSold} onClick={addToCart}>Add to cart</button>
                    </div>
                }
            </div>
        </div>
    )
}
export default ProductInfo;