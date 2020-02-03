import React, { useState } from "react";
import ProfileInfo from "./Partials/ProfileInfo"
import AddProductForm from "./Partials/AddProductForm";
import { getCategories } from "../UserFunctions";
const Profile = (props) => {

    const [showAddProduct = false, setShowAddProduct] = useState();
    const [categories = [], setCategories] = useState();

    const addProductShowHandler = async () => {
        let show = showAddProduct;
        setShowAddProduct(!show);
        const catt = await getCategories();
        setCategories(catt);
    };

    if (localStorage.currentUser) {
        const currentUser = JSON.parse(localStorage.currentUser);
        return (
            <div className="profile-view">
                <ProfileInfo currentUser={currentUser} />
                <div className="buttons-holder">
                    <button onClick={addProductShowHandler}>Add Product</button>
                    <button>Change Password</button>
                </div>
                {showAddProduct ? <AddProductForm  categories={categories} /> : null}
            </div>
        )
    } else {
        window.location.href = "/login"
    }
}
export default Profile;