import React, { Component } from "react";
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

    async componentDidMount() {
        const products = await getProducts();
        this.setState({products: products})
        const categories = await getCategories();
        this.setState({ categories: categories })
    }

    reRender = () =>{
        this.componentDidMount()
    }

    render() {
        return (
            <div>
                {this.state.products.length > 0 ? <Product selectCategory={this.selectCategoryHandler}
                  render={this.reRender}  categories={this.state.categories}
                    products={this.state.products} currentCategory={this.state.selectedCategory} /> : <p>Loading...</p>}
            </div>
        )
    }
}

export default Products;