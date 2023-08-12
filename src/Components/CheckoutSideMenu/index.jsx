import {XMarkIcon} from "@heroicons/react/20/solid/index.js";
import {useContext} from "react";
import {ShoppingCarContext} from "../../Context/index.jsx";
import {OrderCard} from "../OrderCard/index.jsx";
import {totalPrice} from "../../utils/index.js";
import {Link} from "react-router-dom";

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCarContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter((product) => product.id !== id)
        context.setCartProducts(filteredProducts)
        context.setCount(context.count - 1)
    }
    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(0)
        context.closeCheckoutSideMenu()
    }

    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-78px)] top-[68px]`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My order</h2>
                <div onClick={() => context.closeCheckoutSideMenu()}>
                    <XMarkIcon className="h-5 w-5 text-black cursor-pointer"/>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map((product) => (
                        <OrderCard key={product.id} data={product} handleDelete={handleDelete}/>
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center my-2'>
                    <span className='font-light '>
                        Total:
                    </span>
                    <span className='font-medium text-2xl'>
                        ${totalPrice(context.cartProducts)}
                    </span>
                </p>
                <Link to='/my-orders/last'>
                    <button
                        className='w-full bg-black text-white py-3 rounded-lg'
                        onClick={() => handleCheckout()}
                    >
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    )
}

export {CheckoutSideMenu}