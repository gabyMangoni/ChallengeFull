import React from 'react';
import Table from './Table'
import BigPanel from './BigPanel'

function TableProductList(){
    return(
        <React.Fragment>
            <BigPanel title={"Listado de Egresossssss"} key='productsPanel'>
                <Table heads={[
                  {prop: 'id', title: 'ID'},
                  {prop: 'concept', title: 'Concepto'},
                  {prop: 'amount', title: 'Importe'},
                  {prop: 'date', title: 'Fecha'}
                ]} 
                fetch={'http://localhost:3001/api/operations/out'}
                key={'operation'}
                />
            </BigPanel>
        </React.Fragment>
    )
}

export default TableProductList;