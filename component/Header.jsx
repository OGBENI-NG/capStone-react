import React from "react"
import {Link, Outlet} from "react-router-dom"

export default function Header() {
    return (
        <>
            <header>
                <Link to="/photos"><h1 className="logo">Pic some</h1></Link>
                <Link to="/chart" className="chart"><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link> 
            </header>
            <Outlet />
        </>
    )
}