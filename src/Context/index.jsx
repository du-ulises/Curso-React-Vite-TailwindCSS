import {createContext, useState} from "react";
import PropTypes from "prop-types";

export const ShoppingCarContext = createContext()
export const ShoppingCarProvider = ({children}) => {
    ShoppingCarProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    const [count, setCount] = useState(0);

    return (
        <ShoppingCarContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShoppingCarContext.Provider>
    )
}