import React, { Component } from "react";
import axios from "axios";
import Product from "./Partials/Product"
import { getCategories, getProducts } from "../UserFunctions";
class Products extends Component {
    state = {
        products: [],
        categories: [],
        selectedCategory: "All"
    }
    selectCategoryHandler = (e) => {
        this.setState({ selectedCategory: e.target.value });
    }
    addToCart = (productId) => {
        if (localStorage.currentUser) {
            let user = JSON.parse(localStorage.currentUser);
            return axios.post(`/cart/${user.Id}/additem/${productId}`, {}, {
                'headers': {
                    'authorization': `Bearer ${user.token}`
                }
            }).then(res => this.componentDidMount()).catch(err => console.log(err))
        }else{
            window.location.href= '/login'
        }
    }

    async componentDidMount() {
        const products = await getProducts();
        let resolved = products.filter(el => !el.is_sold)
        this.setState({ products: resolved })
        const categories = await getCategories();
        this.setState({ categories: categories })
    }

    render() {
        return (
            <div>
                {this.state.products.length > 0 ? <Product selectCategory={this.selectCategoryHandler}
                    addToCart={this.addToCart} categories={this.state.categories}
                    products={this.state.products} currentCategory={this.state.selectedCategory} /> : <p>Loading...</p>}
            </div>
        )
    }
}

export default Products;