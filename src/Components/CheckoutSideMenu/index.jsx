import {XMarkIcon} from "@heroicons/react/20/solid/index.js";
import {useContext} from "react";
import {ShoppingCarContext} from "../../Context/index.jsx";
import {OrderCard} from "../OrderCard/index.jsx";
import {totalPrice} from "../../utils/index.js";

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCarContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter((product) => product.id !== id)
        context.setCartProducts(filteredProducts)
        context.setCount(context.counter--)
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
            <div className='px-6 overflow-y-scroll'>
                {
                    context.cartProducts.map((product) => (
                        <OrderCard key={product.id} data={product} handleDelete={handleDelete}/>
                    ))
                }
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-light '>
                        Total:
                    </span>
                    <span className='font-medium text-2xl'>
                        ${totalPrice(context.cartProducts)}
                    </span>
                </p>
            </div>
        </aside>
    )
}

export {CheckoutSideMenu}