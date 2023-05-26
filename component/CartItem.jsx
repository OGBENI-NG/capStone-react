import React, {useContext} from "react"
import { Context } from "../useContest"
import  propTypes  from "prop-types"
import useHover from "../hooks/useHover"

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    const {setHovered, deleteIcon} = useHover()

    return(
        <div className="cart-item">
            <i 
                className={deleteIcon} 
                onClick={() => removeFromCart(item.id)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}
CartItem.propTypes = {
    item: propTypes.shape({
        url:propTypes.string.isRequired
    })
}

export default CartItem