export default (state, action)=>{
   
    switch(action.type){
        
        case "SAVE_ITEM_FOR_LATER":
            return{
                ...state,
                cartSavedForLater:[action.payload, ...state.cartSavedForLater],
            };

        // case "CANCELLED_ITEM":
        //     return{
        //         ...state,
        //         cancelledItems:[action.payload, ...state.cancelledItems],
        //     };
          
        case "ADD_ITEM_TO_CART":
            return{
                ...state,
                myShoppingCart:[action.payload, ...state.myShoppingCart],
            };
            case "REMOVE_ITEM_FROM_CART":
                return{
                    ...state,
                    myShoppingCart: state.myShoppingCart.filter(
                        (myShoppingCart) => myShoppingCart.cartItemId !== action.payload
                    )

                };
                case "REMOVE_FROM_SAVED_FOR_LATER":
                    return{
                        ...state,
                        cartSavedForLater: state.cartSavedForLater.filter(
                            (cartSavedForLater) => cartSavedForLater.cartItemId !== action.payload
                        )
                        
                    };
                    // case "REMOVE_FROM_CANCELLED_ITEMS":
                    //     return{
                    //         ...state,
                    //         cancelledItems: state.cancelledItems.filter(
                    //             (cancelledItems) => cancelledItems.cartItemId !== action.payload
                    //         )
                            
                    //     };
                    case 'INCREASE_QUANTITY':
                        console.log(action.product_selected_qty);
                        return {
                          ...state,
                          product_selected_qty: action.product_selected_qty + 1
                        };
                      case 'DECREASE_QUANTITY':
                        if (state.product_selected_qty > 0) {
                          return {
                            ...state,
                            product_selected_qty: action.product_selected_qty - 1
                          };
                          

                          
    }
        default:
            return state;
    }
};