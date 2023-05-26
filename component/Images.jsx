import React from "react"
import propTypes from 'prop-types'
import useHover from "../hooks/useHover"
function Images({className, img}) {
    const {hovered, setHovered, toggleIsFavorite, addToCart, removeFromCart, cartItem} = useHover()

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

}
Images.propTypes = {
    className: propTypes.string,
    img: propTypes.shape({
        id: propTypes.string.isRequired,
        url: propTypes.string.isRequired,
        isFavorite: propTypes.bool
    })
}
export default Images