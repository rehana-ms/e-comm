import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Banner.scss";

import PopularProductData from "../data/PopularProducts.json";

import { useToasts } from "react-toast-notifications";

export default function Banner() {
  const { addToast } = useToasts();

  const data = PopularProductData.map((product) => {
    return (
      <div className="popular-product" key={product.id}>
        <div className="card-product">
          <img
            src={require("../assets/" +
              product.product_image)}
            alt={product.product_image} id="ban"/>
          
            </div>
          </div>
    
    );
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    lazyLoad: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-popular-products">

      <Slider {...settings} className="popular-product-large-screen">
        {data}
      </Slider>
    </div>
  );
}
