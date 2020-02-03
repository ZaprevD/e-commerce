import React from "react";
import { useGetData } from "use-axios-react";
import CartItems from "./CartItems";
const CartInfo = (props) => {

    const currentUser = JSON.parse(localStorage.currentUser);
    const token = "Bearer " + currentUser.token;
    const [cartItems1 = []] = useGetData(`/cart/${currentUser.Id}`, {
                'headers': {
                    'authorization': token
                }
            });
    

    return (
        <div className="cart-items-holder">
            <h2>{`${currentUser.firstName}'s Cart`}</h2>
            {cartItems1.length > 0? cartItems1.map(el => {
                 return   <CartItems key={el.productId} name={el.desc} price={el.price} categoryName={el.categoryName} />
            }): <p>Loading</p>}
        </div>
    )
}
export default CartInfo;