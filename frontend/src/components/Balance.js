import React, { Component } from 'react';



class Balance extends Component {
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
           

            <div className="card shadow mb-4">
                <div className="card-body yellow">
                    <h1 className="h3 mb-2 text-gray-800 ">+++</h1>
                </div>

                

            </div>
            </React.Fragment>
        );
    }
}



export default Balance;
