import React, { Component } from 'react';

class Default extends Component{
  render(){
    return(
      <div className='container'>
        <div className="row">
          <div className="col-10 mx-auto text-center text-title py-5">
             <h2 className="display-4">404</h2>
             <h2>Error</h2>
             <h3>Page not found</h3>
             <h4>The requested URL <span className="text-danger">{this.props.location.pathname}</span>{' '} was not found</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Default;