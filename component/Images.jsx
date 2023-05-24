import React, {useState, useContext} from "react"
import { Context } from "../useContest"


export default function Images({className, img}) {
    const {toggleIsFavorite} = useContext(Context)
    const [hovered, setHovered] = useState(false)

    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleIsFavorite(img.id)}></i>
        } else if(hovered) {
           return <i onClick={() => toggleIsFavorite(img.id)} className="ri-heart-line favorite"></i>
        }
    }

    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon}
        </div>
    )
}