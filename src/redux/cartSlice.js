import {createSlice} from '@reduxjs/toolkit'

export const cartSlice=createSlice({
    name:"cartSlice",
    initialState:[],
    reducers:{

        addToCart:(state,action)=>{ 
            const foundProduct=state.find((ele)=>ele.id===action.payload.id)
            if(foundProduct){
                foundProduct.quantity+=1
            }
            else{
                const productClone={...action.payload,quantity:1}
                state.push(productClone)
            }

        },

        deleteFromCart:(state,action)=>{
            return state.filter((ele)=>ele.id!==action.payload.id)
        },

        clear:(state,action)=>{
            return []
        },

        
           
        
        
        
    }
})

export const {addToCart,deleteFromCart,clear}=cartSlice.actions
export default cartSlice.reducer