import React from 'react';
import { Link } from "react-router-dom";

function OperationsList(props){
    
    return (
        <React.Fragment>
            <tr>
                <td><Link to="/ListOut" className="letters-color">{props.id}</Link></td>
                <td>{props.concept}</td>
                <td>{props.amount}</td>
                <td>{props.date}</td>
                <td>{props.category}</td>
            </tr>
        </React.Fragment>
    )
}

export default OperationsList;