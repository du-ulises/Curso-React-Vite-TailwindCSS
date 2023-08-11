import {createContext} from "react";
import PropTypes from "prop-types";

const ShoppingCarContext = createContext()

export const ShoppingCarProvider = ({children}) => {
    ShoppingCarProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }
    return (
        <ShoppingCarContext.Provider value={{}}>
            {children}
        </ShoppingCarContext.Provider>
    )
}