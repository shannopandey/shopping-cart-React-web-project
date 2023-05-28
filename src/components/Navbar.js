import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {Button} from '../styles/Button';

class Navbar extends Component{
  render(){
    return(
      <NavWrapper className='navbar navbar-expand-sm px-sm-5'>
      {/*
      https://www.iconfinder.com/icons/1243689/call_phone_icon
      Creative Commons (Attribution 3.0 Unported);
      https://www.iconfinder.com/Makoto_msk
      */}

        <Link to='/' className='navbar-brand text-title px-2' style={{color:'yellow'}}>
          <img src={logo} alt='store'/> {}Mera Store
        </Link>
        <ul className="navbar-nav align-items-center">
           <li className="nav-item ml-5">
             <Link to='/' className='nav-link'>Products</Link>
           </li>
        </ul>
         <Link to='/cart' className='ml-auto'>
          <Button>
            <span className='mr-2' style={{color:'white'}}>
             <i className="fas fa-cart-plus" style={{color:'white'}}/> My Cart
            </span>
          </Button>
         </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainSalmon);
  .nav-link{
    color: var(--white) !important;
    font-size: 1.3rem
  }
`;


export default Navbar;