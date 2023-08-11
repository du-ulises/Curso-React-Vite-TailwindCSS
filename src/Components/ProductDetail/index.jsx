import {XMarkIcon} from "@heroicons/react/20/solid/index.js";

const ProductDetail = () => {

    return (
        <aside
            className='flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)]> top-[68px]'>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div><XMarkIcon className="h-5 w-5 text-black cursor-pointer"/></div>
            </div>
        </aside>
    )
}

export {ProductDetail}