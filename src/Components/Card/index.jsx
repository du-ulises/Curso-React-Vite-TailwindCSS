import {useContext} from "react";
import {ShoppingCarContext} from "../../Context/index.jsx";
import {CheckIcon, PlusIcon} from "@heroicons/react/20/solid/index.js";
import PropTypes from "prop-types";

const Card = ({data}) => {
    Card.propTypes = {
        data: PropTypes.object.isRequired,
    }

    const context = useContext(ShoppingCarContext)

    const showProduct = (productDetail) => {
        context.setProductToShow(productDetail)
        context.openProductDetail()
        context.closeCheckoutSideMenu()
    }

    const addProductToCart = (event, productData) => {
        event.stopPropagation()
        context.setCartProducts([...context.cartProducts, productData])
        context.setCount(context.count++)
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }

    const renderIcon = () => {
        const isInCart = context.cartProducts.filter((product) => product.id === data.id).length > 0;

        if (isInCart) {
            return (
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'
                >
                    <CheckIcon className='h-5 w-5 text-white'></CheckIcon>
                </div>
            )
        }

        return (
            <div
                className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                onClick={(event) => addProductToCart(event, data)}
            >
                <PlusIcon className='h-5 w-5 text-black'></PlusIcon>
            </div>
        )
    }

    return (
        <div
            className='bg-white cursor-pointer w-56 h-60 rounded-lg'
            onClick={() => showProduct(data)}
        >
            <figure className='relative mb-2 w-full h-4/5'>
                <span
                    className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 p-1 px-3 py-0.5'>
                    {data.category.name}
                </span>
                <img
                    className='w-full h-full object-cover rounded-lg'
                    src={data.images && data.images[0]}
                    alt={data.title}
                />
                {renderIcon()}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.title}</span>
                <span className='text-lg font-medium'>${data.price}</span>
            </p>
        </div>
    )
}

export {Card}