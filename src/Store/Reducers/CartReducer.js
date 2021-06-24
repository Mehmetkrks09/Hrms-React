   import {CartItems} from ".../initualValues/CartItems"

const initialState={
   CartItems:cartItems
   
}

export default function cartReducer (state=initialState,{type,payload}){
   switch (type) {
      case ADD_TO_CART:
         
         break;
   
      default:
         break;
   }
   
}