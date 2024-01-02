import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

// ****** Best Practice ******
export const useCart = () => {
    const cart = useContext(CartContext)
    return cart;
}


export const CartContextProvider = (props) => {
    const [items, setItems] = useState([])
      const removeFromCart = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
      };
    return(
        <CartContext.Provider value={{items, setItems}}>
            {props.children}
        </CartContext.Provider>
    )
};
