import React from 'react';

function ProductList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.concept}</td>
                <td>{props.amount}</td>
                <td>{props.date}</td>
                <td>{props.category.name}</td>
            </tr>
        </React.Fragment>
    )
}
export default ProductList;