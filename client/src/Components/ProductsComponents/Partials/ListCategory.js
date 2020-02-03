import React from "react";

const ListCategory = (props) => {
    return(
        <select onChange={props.select}>
            <option>All</option>
           {props.categories.map(cat => {
           return <option   key={cat.Id} >{cat.Name}</option>
           })}
        </select>
    )
}

export default ListCategory;