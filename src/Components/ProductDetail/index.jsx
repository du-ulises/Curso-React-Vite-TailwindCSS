import {XMarkIcon} from "@heroicons/react/20/solid/index.js";
import {useContext} from "react";
import {ShoppingCarContext} from "../../Context/index.jsx";

const ProductDetail = () => {
    const context = useContext(ShoppingCarContext)

    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-78px)] top-[68px]`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={() => context.closeProductDetail()}><XMarkIcon
                    className="h-5 w-5 text-black cursor-pointer"/></div>
            </div>
            <figure className='px-6'>
                <img
                    className='w-full h-full object-cover rounded-lg'
                    src={context.productToShow.images && context.productToShow.images[0]}
                    alt={context.productToShow.title}
                />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='text-2xl font-medium mb-2'>${context.productToShow.price}</span>
                <span className='text-md font-medium'>{context.productToShow.title}</span>
                <span className='text-md font-light'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export {ProductDetail}