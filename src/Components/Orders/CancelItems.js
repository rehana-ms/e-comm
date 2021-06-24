import React, { useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/CartItems.scss";
import CancelItem from "./CancelItem";

import { Link } from "react-router-dom";

import { GlobalCartContext } from "../../context/CartContext";

export default function CancelItems() {
  const { myShoppingCart } = useContext(GlobalCartContext);

  return (
   
    <div className="cart-items-products">
      {myShoppingCart.length > 0 ? (
        <table className="table table-borderless table-responsive">
          <thead className="header-cart-item">
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
          
            </tr>
          </thead>
          <tbody>
            {myShoppingCart.map((product) => (
              <CancelItem data={product} key={product.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className="text-center ">
          Your orders list is empty.
          <Link to="/shop" className="cart-empty-link">
            Continue shopping
          </Link>
        </h2>
      )}
    </div>
    
  );
}
