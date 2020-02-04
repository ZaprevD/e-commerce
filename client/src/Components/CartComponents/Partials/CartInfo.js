import React, { useEffect, useState } from "react";
import axios from "axios"
import CartItems from "./CartItems";

const CartInfo = (props) => {

    const currentUser = JSON.parse(localStorage.currentUser);
    const token = "Bearer " + currentUser.token;
    const [cartItems1, setCartItems1] = useState([]);
    const headers = {
        'headers': {
            'authorization': token
        }
    }
    
    useEffect(() => {
        fetchData();
    }, [cartItems1.length]);

    const fetchData = () => {
        axios.get(`/cart/${currentUser.Id}`, headers)
        .then(res =>  setCartItems1(res.data)).catch(err => console.log(err));
    }

    const removeItem = (id) => {
        return axios.delete(`/cart/delete/${id}`, headers)
        .then(res => fetchData()).catch(err => console.log(err))
    }

    return (
        <div className="cart-items-holder">
            <h2>{`${currentUser.firstName}'s Cart`}</h2>
            {cartItems1.length > 0 ? cartItems1.map(el => {
                return <CartItems key={el.id} remove={() => removeItem(el.productId)} 
                productId={el.productId} name={el.desc} price={el.price} categoryName={el.categoryName} />
            }) : <p>Loading</p>}
        </div>
    )
}
export default CartInfo;