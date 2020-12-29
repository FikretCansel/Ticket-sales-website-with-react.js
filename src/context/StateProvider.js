import React,{createContext,useContext,useReducer} from "react"

//Prepares the dataLayer
export const StateContext= createContext();
//Wrap our app provide the Data Layer
export  const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);
//Pull indormation from the data layer
export const useStateValue=()=>useContext(StateContext);