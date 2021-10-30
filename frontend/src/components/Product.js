import React, { Component } from 'react';
import ProductList from './ProductList';

class Product extends Component {
    constructor() {
        super();

        this.state ={
            operations : []
        }
    }

    async componentDidMount() {
        let props = await (await fetch('http://localhost:3001/api/operations')).json();
        // console.log(props);
        if (props) {
            this.setState({operations: props.data.list})
            console.log(this.state.operations);
        }

    }


    render() {
        return (
            <React.Fragment>
            {/*<!-- MOVIES LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 ">Operaciones Egresos</h1>
            
            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Concepto</th>
                                    <th>Importe</th>
                                    <th>Fecha</th>
                                    <th>Categoria</th>
                                </tr>
                            </thead>
                            <tfoot>
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
                                        return <ProductList  {...operation} key={index}  />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                
            </div>
            </React.Fragment>
        );
    }
}


export default Product;