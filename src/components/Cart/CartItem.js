import React from 'react';

const CartItem = ({item, value}) =>{
  const {id, title, img, price, total, count} = item;
  const {increment, decrement, removeItem} = value;
  return(
    <div className='row my-2 text-center'>

      {/* product image*/}
      <div className="col-10 mx-auto col-lg-2">
        <img src={img} alt="product" style={{width: '5rem', height: '5rem'}} className='img-fluid'/>
      </div>

      {/* product name*/}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product: </span>{title}
      </div>

      {/* product price*/}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price: </span>₹{' '}{price}
      </div>

      {/* product quantity*/}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-</span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
          </div>
        </div>
      </div>

       {/* delete icon*/}
      <div className="col-10 mx-auto col-lg-2">
        <div className="del-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>

      {/*product total*/}
      <div className="col-10 mx-auto col-lg-2">
        <strong>Item Total: ₹ {total}</strong>
      </div>

    </div>
  );
}

export default CartItem;