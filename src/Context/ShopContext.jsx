import React, { createContext } from "react";
import new_collection from "../Components/Assets/new_collection";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{

    const contextValue = {new_collection};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;