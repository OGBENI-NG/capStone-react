import {useState, useContext, useEffect} from "react" 
import { Context } from "../useContest"

function useHover() {
    const {cartItem, toggleIsFavorite, addToCart, removeFromCart} = useContext(Context)
    const [hovered, setHovered] = useState(false)
    const [countCartItem, setCountCartItem] = useState(0)

    const cartIcon =  cartItem.length > 0 ? 'ri-shopping-cart-fill' : 'ri-shopping-cart-line'

    const deleteIcon = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    const displayCountCartItem = {display: cartItem.length === 0 ? 'none' : 'block'}

    useEffect(() => {
        setCountCartItem(cartItem.length)
    }, [cartItem])

    return{
        cartIcon, 
        deleteIcon, 
        hovered, 
        setHovered, 
        displayCountCartItem, 
        countCartItem, 
        toggleIsFavorite, 
        addToCart, 
        removeFromCart, 
        cartItem
    }
}

export default useHover