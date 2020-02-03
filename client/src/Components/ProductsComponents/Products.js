import React, { Component } from "react";
import axios from "axios";
import Product from "./Partials/Product"
import { getCategories } from "../UserFunctions";
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
            axios.get('/products/all')
                .then(res => {
                    this.setState({ products: res.data })
                });
            const categories = await getCategories();
            this.setState({categories: categories})
        }

        render() {
            return (
                <div>
                    {this.state.products.length > 0 ? <Product selectCategory={this.selectCategoryHandler} categories={this.state.categories}
                        products={this.state.products} currentCategory={this.state.selectedCategory} /> : <p>Loading...</p>}
                </div>
            )
        }
    }

export default Products;