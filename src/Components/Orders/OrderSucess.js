import React,{useContext} from "react";
import Nav from "../Navigation/Nav";
import Footer from "../Navigation/Footer";
import HeroImage from "../Navigation/HeroImage";
import TopBanner from '../Navigation/TopBanner';

import {GlobalCartContext} from '../../context/CartContext';


export default function OrderSucess() {
  const {myShoppingCart}=useContext(GlobalCartContext);
  return (
    <div>

      <TopBanner/>
      <Nav />
      <HeroImage />
    
      <div className="container-cart-items">
      <h1 className="text-center">Your order placed Sucessfully <span className="cart-header-number-of-items"> {myShoppingCart.length>0 ? myShoppingCart.length+" items": ""}</span></h1>
     
      
      
    

     
    </div>
      <Footer />
    </div>
  );
}
