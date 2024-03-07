import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Slices/counterSlice'

import breadcrumbSlice from './Slices/breadcrumbSlice'
import cartSlice from './Slices/cartSlice'
import wishSilce  from './Slices/wishSilce'


export default configureStore({
  reducer: {
    alamin : counterSlice,
    breadcrumb : breadcrumbSlice,
    
    wishlist: wishSilce,
    allData: cartSlice,
  },

})