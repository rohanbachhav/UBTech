import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import Image from 'next/image'
import logo from '../images/logo3.png'
import namelogo from '../images/logoname.png'

import { login } from 'components/';
import { plastic_products } from 'components/';
 
import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link className="product_cart" href="/">
          <Image height={40} width={40} src={ logo } alt="Product" /> 
          <Image style={{padding:'5px'}} height={50} width={110} src={ namelogo } alt="Product" />
        </Link>
      </p>

      {/* <h4 style={{padding:"8px"}} > UBTech  </h4> */}

      {/* <p classname="login">
        <Link href="/login"> Login / Signup </Link>
      </p> */}

      <div className="product_cart">
      <h4 style={{padding:"8px"}}>
        <Link href="/plastic_products"> Plastic Products </Link>
      </h4>     

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
      </div>
    </div>
  )
}

export default Navbar