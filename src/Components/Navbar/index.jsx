import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {ShoppingCarContext} from "../../Context/index.jsx";
import {ShoppingBagIcon} from "@heroicons/react/20/solid/index.js";

const Navbar = () => {
    const context = useContext(ShoppingCarContext)
    const activeStyle = 'underline underline-offset-4';
    return (
        <nav id='navbar'
             className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink
                        to='/'
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeStyle : undefined
                        }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeStyle : undefined
                        }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeStyle : undefined
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeStyle : undefined
                        }
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeStyle : undefined
                        }
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeStyle : undefined
                        }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    duma@gmail.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeStyle : undefined
                        }
                    >
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeStyle : undefined
                        }
                    >
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({isActive, isPending}) =>
                            isPending ? "pending" : isActive ? activeStyle : undefined
                        }
                    >
                        Sign in
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className='flex justify-center items-center gap-1'
                    >
                        <ShoppingBagIcon className='h-5 w-5'/> {context.count}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export {Navbar}