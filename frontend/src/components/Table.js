import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetch: this.props.fetch,
      data: [],
      meta: {}
    }
  }

  componentDidMount () {
    fetch(this.state.fetch)
    .then( result => result.json())
    .then( data => {
      this.setState({
        data: data.data.list,
        meta: data.meta
      });
    })
    .catch( err => console.log(err))
  }

  componentDidUpdate() {
  }

  changePage( url ){
    if ( url ) {
      fetch( url )
      .then( result => result.json())
      .then( data => {
        this.setState({
          data: data.data.data.list,
          meta: data.meta
        });
      })
      .catch( err => console.log(err))
    }
  }

  render() {
    return(
      <React.Fragment>
        <div className="table-responsive">
        <table className="table bg-dark-thunder rounded ">
          <thead>
            <tr>
              {
                this.props.heads.map( (head, i) =>
                  <th className="text-gray yellow" key={head.title + i} scope="col">{head.title}</th>
                )
              }
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(this.state.data).map( (value, i) =>
                <tr className="text-white" key={`row${i}`}>
                    {
                      this.props.heads.map( (head, i) => 
                        i === 0 ? <th className="letters-color" key={i} scope="row">{this.state.data[value][head.prop]}</th>
                        : <td key={i} className="letters-color">{this.state.data[value][head.prop]}</td>
                      )
                    }
                </tr>
              )
            }
          </tbody>
        </table>

        </div>
      </React.Fragment>
    )
  }
}

export default Table