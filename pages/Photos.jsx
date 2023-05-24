import React, {useContext} from "react"
import { getClass } from "../utils"
import { Context } from "../useContest"
import Images from "../component/Images"

export default function Photos() {
    const {allPPhotos} = useContext(Context)

    const ImageEl = allPPhotos.map((img, i) =>(
        <Images key={img.id} img={img} className={getClass(i)} />
    ))
    
    return (
        <main className="photos">
            {ImageEl}
        </main>
    )
    
}