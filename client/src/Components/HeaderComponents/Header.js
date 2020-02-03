
import React from "react";
import DefaultRoutes from "./Partials/DefaultRoutes";
import UserRoutes from "./Partials/UserRoutes";
const Header = () => {

    const logOut = () =>{
        localStorage.removeItem("currentUser");
        window.location.href = "/login";
    }

    return(
        <div className="header-box">
            <div className="box-50"> 
                <h3>Logo</h3>
            </div>
            <div className="box-50"> 
                   {localStorage.currentUser? <UserRoutes logout={logOut} /> :  <DefaultRoutes />}
            </div>
        </div>
    )
}

export default Header;