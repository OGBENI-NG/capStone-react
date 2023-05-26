import React from "react"
import {Link, Outlet} from "react-router-dom"
import useHover from "../hooks/useHover"

export default function Header() {
    const {cartIcon, displayCountCartItem, countCartItem} = useHover()
    
    return (
        <>
            <header>
                <Link to="/"><h2 className="logo">Pic Some</h2></Link>
                <div className="cartIcon-container">
                    <Link to="/cart">
                        <i className={`${cartIcon} ri-fw ri-2x cart-icon`}></i>
                        <span className="cart-counts" style={displayCountCartItem}>{countCartItem}</span>
                    </Link>
                </div>
            </header>
            <Outlet />
        </>
    )
}