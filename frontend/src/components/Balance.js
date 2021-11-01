import React, { Component } from 'react';

class Balance extends Component {
    constructor() {
        super();

        this.state ={
            balance : []
        }
    }

    async componentDidMount() {
        let props = await (await fetch('http://localhost:3001/api/operations')).json();
        if (props) {
            this.setState({balance: props.balance})
        }
    }


    render() {
        return (
            <React.Fragment>
            <div className="card shadow mb-4">
                <div className="card-body yellow">
                    <div className="h3 mb-2 text-gray-800 ">$ {this.state.balance}</div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}



export default Balance;
