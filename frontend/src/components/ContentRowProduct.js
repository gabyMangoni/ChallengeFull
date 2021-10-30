import React, { Component } from 'react';
import TotalAmountPanel from './TotalAmountPanel'


class ContentRowProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metrics: []
        }
    }

    // componentDidMount() {

    //     fetch("http://localhost:3000/api/products")
    //         .then(result => result.json())
    //         .then(result => {

    //             let products = result.meta;
    componentDidMount(){

        let promises = [
          fetch("http://localhost:3001/api/operations").then(result => result.json()),
        ];
    
        Promise.all(promises)
        .then(result => {
    
          let operations = result[0].meta;

                this.setState({
                    metrics: [
                    
                        {
                            title: "Total de Operaciones",
                            color: "primary",
                            value: operations.total
                        }
                    ]
                });
            })
    }

        componentDidUpdate(){}

        // let cardProps = [productInDataBase,amount,user];


        render(){
            return(
                <React.Fragment>
                    <div className="row">
                        {this.state.metrics.length ?
                            this.state.metrics.map((metric, index) =>
                                <TotalAmountPanel
                                    title={metric.title}
                                    color={metric.color}
                                    iconClass={metric.iconClass}
                                    value={metric.value}
                                    key={index}
                                />
                            )
                            :
                            <p> Cargando métricas </p>
                        }
                    </div>
                </React.Fragment>
            )
        }
    }
    
        
export default ContentRowProduct;