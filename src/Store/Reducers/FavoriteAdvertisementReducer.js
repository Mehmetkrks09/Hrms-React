import {
    ADD_TO_FAVORİTES,
    REMOVE_FROM_FAVORİTES,
  } from "../Actions/FavoriteActions";
  import { favoriteAdvertisement } from "../initialValues/favoriteAdvertisement";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  const initialState = {
    favoriteAdvertisement,
  };
  export default function FavoriteAdvertisementReducer(state = initialState, { type, payload }) {
    switch (type) {
      case ADD_TO_FAVORİTES:
        let advertisement = state.favoriteAdvertisement.find((c) => c.favoriteAdvertisement.id === payload.id);
        if (advertisement) {
         toast.error("Advertisement Already Exist.");
            
  
   
          return {
            ...state,
          };
        } else {
          return {
            ...state,
            favoriteAdvertisement: [...state.favoriteAdvertisement, { id: 1, favoriteAdvertisement: payload }],
          };
        }
  
      case REMOVE_FROM_FAVORİTES:
        
        let advertisement1 = state.favoriteAdvertisement.find((c) => c.advertisement.id === payload.id);
       
        if (advertisement1) {
          console.log("Silindi")
          
          return { ...state };
        } else {
          state.favoriteAdvertisement.splice(advertisement1, 1);
          return {
            ...state,
          };
        }
      default:
        return state;
    }
  }