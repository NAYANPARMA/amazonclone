//React context api

import React, { createContext , useContext, useReducer } from 'react';


//prepares the data layer
export const StateContext = createContext();

// Warp our app and provide the Data layer to every component of our app
export const StateProvider = ({ reducer , initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

//Pull infomation from the data layer
export const useStateValue = () => useContext(StateContext);