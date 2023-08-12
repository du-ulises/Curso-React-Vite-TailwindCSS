import PropTypes from "prop-types";
import {ChevronRightIcon} from "@heroicons/react/20/solid/index.js";

const OrdersCard = ({data}) => {
    OrdersCard.propTypes = {
        data: PropTypes.object.isRequired,
    }

    return (
        <div className='flex justify-between items-center gap-2 mb-4 border rounded-lg border-black p-4 w-80'>
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span className='font-light'>01.02.23</span>
                    <span className='font-light'>{data.totalProducts} articles</span>
                </p>
                <p className='flex items-center gap-4'>
                    <span className='font-medium text-lg'>${data.totalPrice}</span>
                    <ChevronRightIcon className="h-5 w-5 text-black cursor-pointer"/>
                </p>
            </div>
        </div>
    )
}

export {OrdersCard}