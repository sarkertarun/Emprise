import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'addToWishList', // Corrected name
  initialState: {
    data: [],
  },
  reducers: {
    addToWishList: function(state, action) {
      if(Array.isArray(action.payload)) {
         state.data = action.payload
      } else {
        state.data.push(action.payload)
      }
    }
  },
});

export const { addToWishList } = cartSlice.actions;

export default cartSlice.reducer;

