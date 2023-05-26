import React, {useState, useContext} from "react"
import { Context } from "../useContest"
import PropTypes from 'prop-types'


export default function Images({className, img}) {
    const { toggleIsFavorite, addToCart, removeFromCart, cartItem } = useContext(Context)
    const [hovered, setHovered] = useState(false)

    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleIsFavorite(img.id)}></i>
        } else if(hovered) {
           return <i onClick={() => toggleIsFavorite(img.id)} className="ri-heart-line favorite"></i>
        }
    }


    function cartIcon() {
        const alreadyInCart = cartItem.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i 
                className="ri-shopping-cart-fill cart" 
                onClick={() => removeFromCart(img.id)}
            ></i>
        } else if(hovered) {
            return <i 
                className="ri-add-circle-line cart" 
                onClick={() => addToCart(img)}
            ></i>
        }
    }

    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )

    Images.PropTypes = {
        className: PropTypes.string,
        img: PropTypes.shape({
            id: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            isFavorite: PropTypes.bool
        })
    }
}