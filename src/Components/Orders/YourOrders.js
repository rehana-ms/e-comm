import React,{useContext} from "react";
import Nav from "../Navigation/Nav";
import Footer from "../Navigation/Footer";
import HeroImage from "../Navigation/HeroImage";
import CancelItems from "./CancelItems";
import TopBanner from '../Navigation/TopBanner';
import OrderCancelation from './OrderCancelation';
import OrderSummary from './OrderSummary';
import {GlobalCartContext} from '../../context/CartContext';


export default function Yourorders() {
  const {myShoppingCart}=useContext(GlobalCartContext);
  return (
    <div>

      <TopBanner/>
      <Nav />
      <HeroImage />
    
      <div className="container-cart-items">
      <h1 className="text-center">Purchased Items <span className="cart-header-number-of-items"> {myShoppingCart.length>0 ? myShoppingCart.length+" items": ""}</span></h1>
     
      
      
      <div className="row">
        <div className="col-lg-8  ">
        <CancelItems/>
        </div>
        <div className="col-lg-4 ">
          {
            myShoppingCart.length>0 ? 
            <OrderSummary  />
            :
            ""
          }
        
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8  ">
        <OrderCancelation/>
        </div>
      </div>
     
    </div>
      <Footer />
    </div>
  );
}
