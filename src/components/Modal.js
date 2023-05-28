import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {Button} from '../styles/Button';
import {Link} from 'react-router-dom';

class Modal extends Component{
  render(){
    return(
      <ProductConsumer>
        {value =>{
          const {modalOpen, closeModal} = value;
          const {img, title, price} = value.modalProduct;

          if(!modalOpen){
            return null;
          }else{
            return(
            <ModalContainer>
              <div className="container">
                 <div className="row">
                    <div className="col-8 mx-auto col-md-6 col-lg-4 text-center p-5" id='modal'>
                      <h5><b>Item Added to the Cart</b></h5>
                      <img src={img} alt="product" className='img-fluid'/>
                      <h5>{title}</h5>
                       <h5 className="text-muted">Price: ₹ {price}</h5>
                       <Link to='/'>
                         <Button onClick={() =>closeModal()}>Continue Shopping</Button>
                       </Link>
                       <Link to='/cart'>
                         <Button cart onClick={() =>closeModal()}>Go To Cart</Button>
                       </Link>
                    </div>
                 </div>
              </div>
            </ModalContainer>
          );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal{
    background: var(--white);
  }
`;

export default Modal;