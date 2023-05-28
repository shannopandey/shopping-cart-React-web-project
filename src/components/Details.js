import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {Button} from '../styles/Button';

class Details extends Component{
  render(){
    return(
      <ProductConsumer>
        {value =>{
          const {id, company, img, info, price, title, inCart} = value.detailProduct;
          return(
            <div className="container py-5">

               {/* product title */}
               <div className="row">
                  <div className="col-10 mx-auto text-center text-Salmon my-5">
                    <h2>{title}</h2>
                  </div>
               </div>

               <div className="row">
                  {/* product image*/}
                  <div className="col-10 mx-auto my-3 col-md-6">
                   <img src={img} alt="product" className='image-fluid'/>
                  </div>
                  {/* product text */}
                  <div className="col-10 mx-auto my-3 col-md-6">
                    <h3>Model: {title}</h3>
                    <h5 className="text-title text-muted mt-3 mb-2">
                      Made By: {company}
                    </h5>
                    <h5 className="text-green">
                      <strong>Price: ₹ {price}</strong>
                    </h5>
                    <p className="font-weight-bold mt-3 mb-0">Info about the product</p>
                    <p className="text-muted lead">{info}</p>
                    {/* buttons */}
                    <div>
                     <Link to='/'>
                       <Button>Back to Products</Button>
                     </Link>
                     <Button cart
                        disabled={inCart ? true: false}
                        onClick={()=>{
                          value.addToCart(id);
                          value.openModal(id);
                        }}>
                        {inCart ? 'In cart' : 'Add to Cart'}
                     </Button>
                    </div>
                  </div>
               </div>
            </div>
          )
        }}
      </ProductConsumer>
    );
  }
}

export default Details;