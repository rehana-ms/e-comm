import React from "react";
import '../styles/ProductCategories.scss';
import ShoppingWomen from '../assets/images/women.jpeg';
import ShoppingMen from '../assets/images/MenF.jpeg';
import ShoppingKids from '../assets/images/KidF.jpeg';
import ShoppingElectronics from '../assets/images/Electronics.jpeg';
import ShoppingGroceries from '../assets/images/Groceries.jpeg';
import ShoppingHome from '../assets/images/Home.jpeg';



export default function ProductCategories() {
  return (
    <div className="products-category-container">
    
       <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-6 ">
      <div className="card-product card-body-product-categories">
      <img className="card-img-top " 
       src={ShoppingMen}
       
       alt="Products" />
        <div className="card-body">
          <h3 className="card-title">
         Men's Fashion
          </h3>
         
        </div>
        <div className="card-country-info">
          <a
            href="/collections/men"
            className="stretched-link"
          > </a>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="card-product card-body-product-categories">
      <img className="card-img-top" 
        src={ShoppingWomen}
       
       alt="Products" />
        <div className="card-body ">
        <h3 className="card-title ">
         Women's Fashion
          </h3>
          <a
            href="/collections/women"
            className="stretched-link"
          > </a>
        </div>
       
      </div>
    </div>

    <div className="col-lg-4 col-md-4 col-sm-6  ">
      <div className="card-product card-body-product-categories">
      <img className="card-img-top" 
      src={ShoppingKids}
       
       alt="Products" />
     
        <div className="card-body">
        <h3 className="card-title">
         Kid's Fashion
          </h3>
          
          <a
            href="/collections/kids"
            className="stretched-link"
          > </a>
        </div>
       
      </div>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="card-product card-body-product-categories">
      <img className="card-img-top" 
        src={ShoppingElectronics}
       
       alt="Products" />
        <div className="card-body ">
        <h3 className="card-title ">
         Electronics 
          </h3>
          <a
            href="/collections/electronics"
            className="stretched-link"
          > </a>
        </div>
       
      </div>
    </div>

    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="card-product card-body-product-categories">
      <img className="card-img-top" 
        src={ShoppingHome}
       
       alt="Products" />
        <div className="card-body ">
        <h3 className="card-title ">
          Home Appliances
          </h3>
          <a
            href="/collections/appliances"
            className="stretched-link"
          > </a>
        </div>
       
      </div>
    </div>

    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="card-product card-body-product-categories">
      <img className="card-img-top" 
        src={ShoppingGroceries}
       
       alt="Products" />
        <div className="card-body ">
        <h3 className="card-title ">
           Groceries
          </h3>
          <a
            href="/collections/groceries"
            className="stretched-link"
          > </a>
        </div>
       
      </div>
    </div>


      </div>
    
  
         </div>
  );
}
