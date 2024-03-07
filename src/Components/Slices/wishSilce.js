import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wishlistItems: localStorage.getItem('wishlistItems') ? JSON.parse(localStorage.getItem('wishlistItems')) : [],
    
}

export const wishSilce = createSlice({
  name: 'wishlists',

  initialState,

  reducers: {

    addToWishList: (state, action) => {
      console.log("wish product data", action.payload)
    },

    clearAllWishList: (state, action) =>{
        state.wishlistItems = [];
    },
    removeWishItem:(state, action) => {

    },

  },
})


export const { addToWishList, clearAllWishList, removeWishItem } = wishSilce.actions;

export default wishSilce.reducer;
