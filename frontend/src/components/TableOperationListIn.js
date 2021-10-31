import React from 'react';
import Table from './Table'
import BigPanel from './BigPanel'

function TableOperationListIn(){
    return(
        <React.Fragment>
            <BigPanel title={"Listado de Ingresos"} key='operationsPanel'>
                <Table heads={[
                  {prop: 'id', title: 'ID'},
                  {prop: 'concept', title: 'Concepto'},
                  {prop: 'amount', title: 'Importe'},
                  {prop: 'date', title: 'Fecha'},
                  {prop: 'category', title: 'Categoria'}
                ]} 
                fetch={'http://localhost:3001/api/operations/in'}
                key={'operation'}
                />
            </BigPanel>
        </React.Fragment>
    )
}

export default TableOperationListIn;