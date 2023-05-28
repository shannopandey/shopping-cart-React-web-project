import React from 'react';
import {Link} from 'react-router-dom';

const CartTotal = ({value}) =>{
  const {cartSubtotal, cartTotal, cartTax, clearCart} = value;
  return(
   <React.Fragment>
     <div className="container">
       <div className="row">
        <div className="col-10 mt-2 ml-sm-2 ml-md-auto col-sm-8 text-right">
          <Link to='/'>
            <button
              className='btn btn-outline-danger mb-3 px-5'
              type='button'
              onClick={() => clearCart()}>
                   CLEAR CART
              </button>
          </Link>
          <h5>
            <span className="text-title">Subtotal: </span>
            <strong>₹ {cartSubtotal}</strong>
          </h5>
          <h5>
            <span className="text-title">Tax: </span>
            <strong>₹ {cartTax}</strong>
          </h5>
          <h5>
            <span className="text-title">Total: </span>
            <strong>₹ {cartTotal}</strong>
          </h5>
        </div>
       </div>
     </div>
   </React.Fragment>
  );
}

export default CartTotal;