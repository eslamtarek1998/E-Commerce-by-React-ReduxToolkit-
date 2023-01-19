import {configureStore} from '@reduxjs/toolkit'
import productSlice from './Slice'
import cartSlice from './cartSlice'

export const store=configureStore({
    reducer:{
        products:productSlice,
        cart:cartSlice
    }
})