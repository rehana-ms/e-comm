import React,{useContext} from "react";
import NavBar from "../Navigation/NavBar";
import Footer from "../Navigation/Footer";
import HeroImage from "../Navigation/HeroImage";
import TopBanner from '../Navigation/TopBanner';

import {GlobalCartContext} from '../../context/CartContext';


export default function OrderSucess() {
  const {myShoppingCart}=useContext(GlobalCartContext);
  return (
    <div>

      <TopBanner/>
      <NavBar />
      <HeroImage />
    
      <div className="container-cart-items">
      <h1 className="text-center">Your order wasn't placed <br></br> Due to transaction failure </h1>
     
      
      
    

     
    </div>
      <Footer />
    </div>
  );
}
