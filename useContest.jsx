import React, {createContext, useState, useEffect} from "react"

const Context = createContext()

function ContextProvider({children}) {
    const [allPPhotos, setAllPhotos] = useState([])
    const apiUrl = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    }, [])

    function toggleIsFavorite(id) {
        const photosArr = allPPhotos.map(photo => {
            if (photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(photosArr)
    }


    return (
        <Context.Provider value={{allPPhotos, toggleIsFavorite}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context } 