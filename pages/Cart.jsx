import React, {useContext, useState} from "react"
import { Context } from "../useContest"
import CartItem from "../component/CartItem"

export default function Cart() {
    const {cartItem, emptyCart} = useContext(Context)
    const [btnTxt, setBtnTxt] = useState('Place order')
    
    const totalCost = 5.99 * cartItem.length
    const totalCostToDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    

    const cartItemEl = cartItem.map(item => (
        <CartItem key={item.id} item={item}/>
    ))

    function placeOrder() {
        setBtnTxt('order...')
        setTimeout(() => {
            console.log('order placed successfully')    
            setBtnTxt('place order')
            emptyCart()
        }, 3000)
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemEl}
            <p className="total-cost">Total: {totalCostToDisplay}</p>
            {
                cartItem.length > 0 ? 
                <div className="order-button">
                    <button onClick={placeOrder}>{btnTxt}</button>
                </div> :
                <p>you have no order</p> 
            }
        </main>
    )
}