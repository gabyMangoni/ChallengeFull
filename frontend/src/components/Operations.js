import React, { Component } from 'react';

import OperationsList from './OperationsList';

class Operations extends Component {
    constructor() {
        super();

        this.state ={
            operations : []
        }
    }

    async componentDidMount() {
        let props = await (await fetch('http://localhost:3001/api/operations')).json();
        if (props) {
            this.setState({operations: props.data.list})
            console.log(this.state.operations);
        }

    }



    render() {
        return (
            <React.Fragment>
           
            <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800 ">Operaciones Home</h1>
            
           
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead className="gris" >
                                <tr>
                                    <th>Id</th>
                                    <th>Concepto</th>
                                    <th>Importe</th>
                                    <th>Fecha</th>
                                    <th>Categoria</th>
                                </tr>
                            </thead>
                            <tfoot className="gris">
                                <tr>
                                    <th>Id</th>
                                    <th>Concepto</th>
                                    <th>Importe</th>
                                    <th>Fecha</th>
                                    <th>Categoria</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    this.state.operations.map((operation,index) => {
                                        return <OperationsList  {...operation} key={index}  />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                
            </div>
            </div>
            </React.Fragment>
        );
    }
}


export default Operations;