import { createSlice } from "@reduxjs/toolkit"

export const data =[
  {
    phone: "8990939032",
    surname: "Albert",
    id: 1,
  },
  {
    phone: "0939032",
    surname: "bert",
    id: 2,
  },
  {
    phone: "0939032",
    surname: "KAlrt",
    id: 3,
  },
  {
    phone: "90939032",
    surname: "Bert",
    id: 4,
  }
]

export const counterSlice = createSlice({
  name: "data",
  initialState:data,
  reducers: {
   AddUser:(state,{payload})=>{
    state.data =  [...state.data,payload]
   }
  },
})

export const {  } = counterSlice.actions 
export default counterSlice.reducer
