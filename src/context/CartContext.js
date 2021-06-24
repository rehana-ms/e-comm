import React, { createContext, useReducer, useEffect } from "react";
import CartReducer from '../reducers/CartReducer';
const initialState = {
  myShoppingCart: JSON.parse(localStorage.getItem("myShoppingCart"))||[],
  cartSavedForLater: JSON.parse(localStorage.getItem("cartSavedForLater"))||[],
  // cancelledItems: JSON.parse(localStorage.getItem("cancelledItems"))||[]




};



export const GlobalCartContext=createContext(initialState);

export const GlobalCartContextProvider=({children})=>{
    const [state, dispatch]=useReducer(CartReducer,initialState)
    useEffect(()=>{
      localStorage.setItem("myShoppingCart", JSON.stringify(state.myShoppingCart));
      localStorage.setItem("cartSavedForLater", JSON.stringify(state.cartSavedForLater))
      // localStorage.setItem("cancelledItems", JSON.stringify(state.cancelledItems))

    });
    

   

    const saveItemforLater=(savedItem)=>{
      dispatch({
        type: "SAVE_ITEM_FOR_LATER",
        payload: savedItem,
      });
    };
    const removeItemFromSavedForLater=(id)=>{
      dispatch({
        type: "REMOVE_FROM_SAVED_FOR_LATER",
        payload: id,
      });
    };

    const addItemTocart=(cartItem)=>{
      dispatch({
        type: "ADD_ITEM_TO_CART",
        payload: cartItem,
      }

      );
    };

    const removeItemFromCart=(cartItemId)=>{
      dispatch({
        type: "REMOVE_ITEM_FROM_CART",
        payload: cartItemId,

      })
    }
     const increaseQuantity = (product_selected_qty) => {
      dispatch({
        type: 'INCREASE_QUANTITY',
        payload: product_selected_qty,
    })
  }

    const decreaseQuantity = (product_selected_qty) => {
      dispatch({

        type: 'DECREASE_QUANTITY',
        payload: product_selected_qty,
        })
    }

    // const cancelItem=(cancelledItem)=>{
    //   dispatch({
    //     type: "CANCELLED_ITEM",
    //     payload: cancelledItem,
    //   });
    // };

    // const removeItemFromCancelledItems=(id)=>{
    //   dispatch({
    //     type: "REMOVE_FROM_CANCELLED_ITEMS",
    //     payload: id,
    //   });
    // };

   
    return(
        <GlobalCartContext.Provider value={{
          myShoppingCart: state.myShoppingCart,
            cartSavedForLater:state.cartSavedForLater,
            addItemTocart,
            removeItemFromCart,
            increaseQuantity,
            decreaseQuantity,
            saveItemforLater,
            // cancelItem,
            removeItemFromSavedForLater
            // removeItemFromCancelledItems
        }}>
        {children}
        </GlobalCartContext.Provider>
    );
}

