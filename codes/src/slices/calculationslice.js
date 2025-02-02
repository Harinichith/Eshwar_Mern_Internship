import { createSlice } from "@reduxjs/toolkit";

const initialState={
    number1:" ",
    number2:" ",
    result:0,
};
const CalculationSlice =createSlice({
    name:"calculation",
    initialState,
    reducers:{
    setNumber1:(state,action)=>{
        state.number1=action.payload;
    },
    setNumber2:(state,action)=>{
        state.number2=action.payload;
    },
    add:(state)=>{
        state.result=state.number1+state.number2;
    },
    mul:(state)=>{
        state.result=state.number1*state.number2;
    },
},
});
export const {setNumber1,setNumber2,add,mul} = createSlice.actions;

export default CalculationSlice;