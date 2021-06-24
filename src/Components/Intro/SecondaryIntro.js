import React from "react";
import "../../styles/SecondaryIntro.scss";
import FirstImageIntro from '../../assets/images/a1.jpeg'
import SecondImageIntro from '../../assets/images/a2.jpeg';

export default function SecondaryIntro() {
  return (
    <div>
    
      <div className="row">
        <div className="col-lg-5 secondary-intro-fisrt-image-container">
        <div className="card-product card-secondary-intro">
      <img className="card-img-top" 
      src={FirstImageIntro}
       
       alt="Products" />
     
        <div className="card-body ">
        <div className="secondaryIntroHeader"> New Arrival</div>
      
           <a href="/trend/New" className="btn-show-now-secondary-intro">Shop Now</a>
        </div>
       
      </div>
         
        </div>
        <div className="col-lg-5 secondary-intro-second-image-container">
        <div className="card-product card-secondary-intro">
      <img className="card-img-top" 
      src={SecondImageIntro}
       
       alt="Products" />
     
        <div className="card-body">
        <div className="secondaryIntroHeader">Trending</div>
       
           <a href="/trend/Trending" className="btn-show-now-secondary-intro">Shop Now</a>
        </div>
       
      </div>

        </div>
      </div>

     
    </div>
  );
}
