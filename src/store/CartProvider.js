import { useState, useEffect } from "react";
import { CartContext } from "./cart-context";

const CartProvider = ({ children }) => {
    const [items, setItems] = useState(new Map());

    const addItemFunc = (item, quantity) => {
        setItems(prevMap => {
            const newMap = new Map(prevMap);
            if (quantity === 0) {
                newMap.delete(item.id);
            } else {
                newMap.set(item.id, { ...item, quantity }); // Create a new object instead of modifying existing item
            }
            return newMap;
        });
    };

    const removeItemFunc = (id) => {
        setItems(prevMap => {
            const newMap = new Map(prevMap);
            newMap.delete(id);
            return newMap;
        });
    };

    // Calculate total amount dynamically
    const totalAmount = Array.from(items.values()).reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    useEffect(() => {
        console.log("Updated Items:", Array.from(items.values()));
    }, [items]); // Log updates when items change

    const cartContext = {
        items,
        totalAmount,
        addItem: addItemFunc,
        removeItem: removeItemFunc,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
