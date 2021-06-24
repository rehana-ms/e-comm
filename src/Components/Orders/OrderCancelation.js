import React,{useContext} from "react";
import OrderCancel from './OrderCancel';

import {GlobalCartContext} from '../../context/CartContext';
export default function SavedItems() {
  const {cartSavedForLater}=useContext(GlobalCartContext);
  
  return (
    <div className="cart-items-saved-for-later">
      <h2 className="text-center">Cancelled Orders <span className="cart-header-number-of-items"> {cartSavedForLater.length>0 ? cartSavedForLater.length+" of "+ cartSavedForLater.length+" items": "0 items"}</span></h2>
      {
        cartSavedForLater.length>0?
        <table className="table table-borderless table-responsive">
        <thead className="header-cart-item">
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
           
          </tr>
        </thead>
        <tbody>
        {cartSavedForLater.map((product) => (
            <OrderCancel data={product} key={product.id} />
          ))}
        </tbody>
      </table> 
        :
        <h3 className="saved-items-list-empty">Your Cancelled order list is empty</h3>
      }
     
      
    </div>
  );
}
