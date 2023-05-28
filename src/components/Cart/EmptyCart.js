import React from 'react';

const EmptyCart = () =>{
  return(
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-title text-center">
           <h2>Your Cart is currently empty</h2>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;