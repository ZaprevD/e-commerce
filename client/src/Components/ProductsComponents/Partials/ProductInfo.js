import React from "react";

const ProductInfo = (props) => {

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
                    <div>
                        <button>Buy Now</button>
                        <button onClick={() => props.addToCart(props.productId)}
                        >Add to cart</button>
                    </div>
            </div>
        </div>
    )
}
export default ProductInfo;