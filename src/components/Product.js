import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductWrapper} from '../styles/Div';
import PropTypes from 'prop-types';
import {ProductConsumer} from '../context';

class Product extends Component{

  render(){
    const {id, title, img, price, inCart} = this.props.product;
    return(
      <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
        <div className="card">

          {/* Image part in card*/}
          <ProductConsumer>
            {value => (
              <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                <Link to='/details'>
                  <img src={img} alt="product" className='card-img-top'/>
                </Link>
                <button className="cart-btn"
                    disabled={inCart ? true: false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}>
                  {inCart ? (
                    <p className="mb-0" disabled>{' '}In cart</p>
                  ) : (
                    <i className="fas fa-cart-plus"/>
                  )}
                </button>
              </div>)
            }
          </ProductConsumer>

          {/* footer part in card*/}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className='mb-0 font-italic'>
              <span className='mr-1'>₹</span>{price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
    img: PropTypes.string
  }).isRequired
};

export default Product;