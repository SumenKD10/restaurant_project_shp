import { useState } from "react";
import { CartContext } from "./cart-context";

const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const addItemFunc = item => {
        console.log("Hello");
        setItems([...items, item]);
        console.log("Item Pushed", item);
    };

    const removeItemFunc = id => { };

    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem: addItemFunc,
        removeItem: removeItemFunc
    }

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
};


export default CartProvider;