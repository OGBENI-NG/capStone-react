import React, {useContext, useState, useEffect} from "react"
import {Link, Outlet} from "react-router-dom"
import { Context } from "../useContest"

export default function Header() {
    const {cartItem} = useContext(Context)
    const [countCartItem, setCountCartItem] = useState(0)
    const cartIconClassName = cartItem.length > 0 ? 'ri-shopping-cart-fill' : 'ri-shopping-cart-line'

    useEffect(() => {
        setCountCartItem(cartItem.length)
    }, [cartItem])

    return (
        <>
            <header>
                <Link to="/"><h2 className="logo">Pic Some</h2></Link>
                <div className="cartIcon-container">
                    <Link to="/cart">
                        <i className={`${cartIconClassName} ri-fw ri-2x cart-icon`}></i>
                        <span className="cart-counts" style={{display: cartItem.length === 0 ? 'none' : 'block'}}>{countCartItem}</span>
                    </Link>
                </div>
            </header>
            <Outlet />
        </>
    )
}