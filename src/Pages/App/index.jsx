import {BrowserRouter, Navigate, useRoutes} from "react-router-dom";
import {Home} from '../Home/index.jsx';
import {MyAccount} from "../MyAccount/index.jsx";
import {MyOrder} from "../MyOrder/index.jsx";
import {MyOrders} from "../MyOrders/index.jsx";
import {SignIn} from "../SignIn/index.jsx";
import {NotFound} from "../NotFound/index.jsx";
import './App.css';
import {Navbar} from "../../Components/Navbar/index.jsx";
import {InitializeLocalStorage, ShoppingCarContext, ShoppingCarProvider} from "../../Context/index.jsx";
import {CheckoutSideMenu} from "../../Components/CheckoutSideMenu/index.jsx";
import {useContext} from "react";

const AppRoutes = () => {
    const context = useContext(ShoppingCarContext)
    // Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    // Sign Out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    // Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = Object.keys(context.account).length === 0
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
    const isUserSignOut = context.signOut || parsedSignOut

    return useRoutes([
        {path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/sign-in'}/>},
        {path: '/clothes', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/sign-in'}/>},
        {
            path: '/electronics',
            element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/sign-in'}/>
        },
        {
            path: '/furnitures',
            element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/sign-in'}/>
        },
        {path: '/toys', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/sign-in'}/>},
        {path: '/others', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/sign-in'}/>},
        {path: '/my-account', element: <MyAccount/>},
        {path: '/my-order', element: <MyOrder/>},
        {path: '/my-orders', element: <MyOrders/>},
        {path: '/my-orders/last', element: <MyOrder/>},
        {path: '/my-orders/:id', element: <MyOrder/>},
        {path: '/sign-in', element: <SignIn/>},
        {path: '/*', element: <NotFound/>},
    ])
}

const App = () => {
    InitializeLocalStorage()

    return (
        <ShoppingCarProvider>
            <BrowserRouter>
                <AppRoutes/>
                <Navbar/>
                <CheckoutSideMenu/>
            </BrowserRouter>
        </ShoppingCarProvider>
    )
}

export default App
