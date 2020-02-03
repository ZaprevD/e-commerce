import React, { useState } from "react";
import axios from "axios";
const AddProductForm = (props) => {

    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");    

    const onDescChange = (e) => setDesc(e.target.value);
    const onPriceChange = (e) => setPrice(e.target.value);
    const onCategoryChange = (e) => {
        let id = e.target.value.substring(0 , e.target.value.indexOf(" "));
        setCategory(id);
    };
    let user = JSON.parse(localStorage.currentUser);
    const token = "Bearer "+user.token;
    const addProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            desc: desc,
            price: parseFloat(price),
            category: parseInt(category)
        };
        return axios.post("/products/new", newProduct,{
            'headers': {
                'Authorization': token
            }
        }).then(res => {
            setDesc("");
            setPrice("");
            setCategory("");
            window.location.href="/products"
        })
            .catch(err => console.log(err));
    }

    return (
        <form className="add-product" onSubmit={addProduct}>
            <div className="add-product-window">
                <input type="textare" placeholder="Description" onChange={onDescChange} value={desc} />
                <input type="Number" placeholder="Price" onChange={onPriceChange} value={price} />
                <select onChange={onCategoryChange}>
                    {props.categories.map(el =>{
                    return <option key={el.Id} >{el.Id +" : "+ el.Name}</option>
                    })}
                </select>
                <button>Add</button>
            </div>
        </form>
    )
}

export default AddProductForm;