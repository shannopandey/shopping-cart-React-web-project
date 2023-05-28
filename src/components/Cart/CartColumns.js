import React from 'react';

const CartColumns = () =>{
  return(
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p>PRODUCTS</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>PRODUCT NAME</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>PRICE</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>QUANTITY</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>REMOVE</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>TOTAL</p>
        </div>
      </div>
    </div>
  );
}

export default CartColumns;