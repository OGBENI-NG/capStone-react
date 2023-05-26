import React, {createContext, useState, useEffect} from "react"

const Context = createContext()

function ContextProvider({children}) {
    const [allPPhotos, setAllPhotos] = useState([])
    const [cartItem, setCartItem] = useState([])


    const apiUrl = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    }, [])
    console.log(allPPhotos)

    function toggleIsFavorite(id) {
        const photosArr = allPPhotos.map(photo => {
            if (photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(photosArr)
    }

    function addToCart(newImage) {
        setCartItem(prevImg => [...prevImg, newImage])
    }
    
    function removeFromCart(id) {
        setCartItem(prevCartImg => prevCartImg.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartItem([])
    }

    return (
        <Context.Provider 
            value={{
                allPPhotos,
                cartItem,
                toggleIsFavorite,
                addToCart,
                removeFromCart,
                emptyCart
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context } 