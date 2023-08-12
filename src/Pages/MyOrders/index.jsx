import {Layout} from "../../Components/Layout/index.jsx";
import {useContext} from "react";
import {ShoppingCarContext} from "../../Context/index.jsx";
import {OrdersCard} from "../../Components/OrdersCard/index.jsx";
import {Link} from "react-router-dom";

function MyOrders() {
    const context = useContext(ShoppingCarContext)

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'>My Orders</h1>
            </div>
            <div className='flex flex-col mt-6'>
                {
                    context.order?.map((order, index) => (
                        <Link key={index} to={`/my-orders/${index}`}>
                            <OrdersCard data={order}/>
                        </Link>
                    ))
                }
            </div>
        </Layout>
    )
}

export {MyOrders};