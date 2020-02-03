import React from "react";

const ProfileInfo = (props) => {

    return (
        <div className="info-window">
            <div className="info-holder">
                <div className="box-90">
                    <h3>First Name</h3>
                    <h4>{props.currentUser.firstName}</h4>
                </div>
                <button>Change</button>
            </div>
            <div className="info-holder">
                <div className="box-90">
                    <h3>Last Name</h3>
                    <h4>{props.currentUser.lastName}</h4>
                </div>
                <button>Change</button>
            </div>
            <div className="info-holder">
                <div className="box-90">
                    <h3>Email</h3>
                    <h4>{props.currentUser.email}</h4>
                </div>
                <button>Change</button>
            </div>
        </div>
    )
}

export default ProfileInfo;