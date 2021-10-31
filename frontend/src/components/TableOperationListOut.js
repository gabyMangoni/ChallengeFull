import React from 'react';
import Table from './Table'
import BigPanel from './BigPanel'

function TableOperationListOut(){
    return(
        <React.Fragment>
            <BigPanel title={"Listado de Egresos"} key='operationsPanel'>
                <Table heads={[
                  {prop: 'id', title: 'ID'},
                  {prop: 'concept', title: 'Concepto'},
                  {prop: 'amount', title: 'Importe'},
                  {prop: 'date', title: 'Fecha'},
                  {prop: 'category', title: 'Categoria'}
                ]} 
                fetch={'http://localhost:3001/api/operations/out'}
                key={'operation'}
                />
            </BigPanel>
        </React.Fragment>
    )
}

export default TableOperationListOut;