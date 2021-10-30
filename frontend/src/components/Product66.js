import React from 'react';
import TableProductList from "./TableProductList";


function Product (){
        return (
            <React.Fragment>         
            {/*<!-- TABLE PRODUCTS LIST -->*/}
            <div className="row margin">
              
              <TableProductList />

        </div>
        </React.Fragment>
        );
    }



export default Product;