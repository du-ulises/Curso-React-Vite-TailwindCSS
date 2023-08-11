import {createContext, useState} from "react";
import PropTypes from "prop-types";

export const ShoppingCarContext = createContext()
export const ShoppingCarProvider = ({children}) => {
    ShoppingCarProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    const [count, setCount] = useState(0);

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => {
        setIsProductDetailOpen(true)
    }
    const closeProductDetail = () => {
        setIsProductDetailOpen(false)
    }

    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
    });

    const [cartProducts, setCartProducts] = useState([]);

    return (
        <ShoppingCarContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
        }}>
            {children}
        </ShoppingCarContext.Provider>
    )
}