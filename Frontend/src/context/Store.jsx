import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

// Create the context
export const Store = createContext(null);

const StoreProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    // Add item to cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1, // Ensures undefined values start from 1
        }));
    };

    // Remove item from cart (FIXED)
    const removeCart = (itemId) => {
        setCartItems((prev) => {
            if (!prev[itemId]) return prev; // If item doesn't exist, return previous state

            const updatedCart = { ...prev };

            if (prev[itemId] === 1) {
                delete updatedCart[itemId]; // Remove item if only 1 left
            } else {
                updatedCart[itemId] -= 1; // Otherwise, decrease count
            }

            return updatedCart;
        });
    };

    const getTotalcartAmoount   =() => {
        let totalamount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let iteminfo = food_list.find((product) => product._id === item);
                totalamount += iteminfo.price * cartItems[item];

            }

        }
        return totalamount;
    }

    const ContextValue = {
        food_list,
        cartItems,
        addToCart,
        removeCart,
        getTotalcartAmoount
    };
    return (
        <Store.Provider value={ContextValue}>
            {props.children}
        </Store.Provider>
    );
};

export default StoreProvider;


