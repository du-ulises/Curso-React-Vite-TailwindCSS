import {XMarkIcon} from "@heroicons/react/20/solid/index.js";
import PropTypes from "prop-types";

const OrderCard = ({data, handleDelete}) => {
    OrderCard.propTypes = {
        data: PropTypes.object.isRequired,
        handleDelete: PropTypes.func
    }

    let renderXMark
    if (handleDelete) {
        renderXMark = <XMarkIcon
            onClick={() => handleDelete(data.id)}
            className="h-5 w-5 text-black cursor-pointer"
        />
    }

    return (
        <div className='flex justify-between items-center gap-2 mb-4'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img
                        className='w-full h-full object-cover rounded-lg'
                        src={data.images && data.images[0]}
                        alt={data.title}
                    />
                </figure>
                <p className='text-sm font-light'>{data.title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${data.price}</p>
                {renderXMark}
            </div>
        </div>
    )
}

export {OrderCard}