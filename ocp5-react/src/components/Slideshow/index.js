import { useState } from "react"
import "../../styles/Slideshow.scss"
import Fleche_gauche from "../../assets/flecheGauche.png"

function Slideshow({imgLogement}) {
    const [currentSlide, updateSlide] = useState(0)
    const prevSlide = currentSlide - 1;
    const nextSlide = currentSlide + 1;
    const nonUnique = imgLogement.length > 1
    console.log(imgLogement.length)
    
    if (currentSlide === imgLogement.length) {
        updateSlide(0)
    }
    if (currentSlide === -1) {
        updateSlide(imgLogement.length - 1)
    }

    return nonUnique? (
        <>
        <main>
            <img className="photo" src={imgLogement[currentSlide]} alt="slideshow images"></img>
            <button className="flecheGauche" onClick={() => updateSlide(prevSlide)}> <img src={Fleche_gauche} alt="flèche gauche"></img> </button>
            <button className="flecheDroite" onClick={() => updateSlide(nextSlide)}> <img src={Fleche_gauche} alt="flèche droite"></img> </button>
            <p className="numero">{currentSlide + 1} / {imgLogement.length} </p>
        </main>         
        </>
    ) : <main>
            <img src={imgLogement[currentSlide]} alt="slideshow images"></img>
        </main>
}

export default Slideshow