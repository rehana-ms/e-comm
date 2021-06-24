import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import logo from "/Users/vannelavenumadhavgoud/react-varkart/src/assets/Ecommerce image.png";
import Cart from "./Cart/Cart";
import CartItems from "./Cart/CartItems";
// import { useHistory } from "react-router-dom";


const StripeButton = ({ price }) => {
  const publishableKey = "pk_test_51IzirTSEZD29b2rkUnqTnf6ct7TjhqO9R6j7SzZ4CVv6XA2jZxjgXvjfvDZS3HlJAmp4h5IKKZzaoKzk0IYjcq7B00gu0584Pg";
  const stripePrice = price * 100;
// const stripePrice = () => {
//     return cart.reduce((sum, {price, quantity}) => sum + (price*quantity), 0);

//   };
  

  const onToken = (token) => {
    console.log(token);
    axios
      .post("http://localhost:8080/payment", {
        amount: stripePrice,
        token,
      })
      .then((response) => {
        console.log(response);
        alert("payment success");
        window.location="/OrderSucess"


      })
      .catch((error) => {
        console.log(error);

        alert("Payment failed");
        window.location="/OrderFailed"

        
        // window.location="/OrderSucess"

      });
  };

  return (
    <StripeCheckout
      amount={stripePrice}
      label="Checkout Now"
      name="VAR_KART"
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total cost is ${price.toFixed(2)}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="INR"
    />
  );
};

export default StripeButton;