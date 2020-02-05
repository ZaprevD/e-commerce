import axios from "axios";
import jwt_decode from "jwt-decode";

export const loginUser = (user) => {
    return axios.post("/login", user)
        .then((res) => {
            let decoded = jwt_decode(res.data);
            const currentUser = {
                token: res.data,
                Id: decoded.currentUser.Id,
                firstName: decoded.currentUser.First_Name,
                lastName: decoded.currentUser.Last_Name,
                email: decoded.currentUser.Email
            }
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
        }).catch(err => console.log(err))
}

export const registerUser = (newUser) => {
    return axios.post("/register", newUser)
        .then(res => console.log(res))
        .catch(err => console.log(err));
};

export const getCategories = () =>{
    return    axios.get('/category/all')
    .then(res => res.data );
};

export const getProducts = () => {
  return  axios.get('/products/all')
    .then(res => res.data);
}


