import React from "react";
import ProductInfo from "./ProductInfo";
import ListCategory from "./ListCategory"
const Product = (props) => {
    let newData = props.products.filter(el => {
        if (props.currentCategory.toLowerCase() !== "all") {
            return el.categoryName.toLowerCase().includes(props.currentCategory.toLowerCase());
        } else {
            return props.products;
        }
    })
    return (
        <div className="products-holder">
            <div className="categoies-box">
                <ListCategory select={props.selectCategory} categories={props.categories} />
            </div>
            {
                newData.map(product => {
                    return (
                        <ProductInfo key={product.Id} desc={product.description} price={product.price}
                            category={product.categoryName} />
                    )

                })}
        </div>
    )

}

export default Product;