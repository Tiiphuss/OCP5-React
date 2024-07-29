import { Logements } from "../../datas/logements.js"
import { useState } from "react"
import "../../styles/Slideshow.scss"
import Fleche_gauche from "../../assets/flecheGauche.png"

function Slideshow({imgLogement}) {
    const [currentSlide, updateSlide] = useState(0)
    const prevSlide = (currentSlide - 1 + imgLogement.length) % imgLogement.length;
    const nextSlide = (currentSlide + 1 + imgLogement.length) % imgLogement.length;

    return (
        <>
            <img src={imgLogement[currentSlide]} alt="slideshow images"></img>
            <button className="flecheGauche" onClick={() => updateSlide(prevSlide)}> <img src={Fleche_gauche} alt="flèche gauche"></img> </button>
            <button className="flecheDroite" onClick={() => updateSlide(nextSlide)}> <img src={Fleche_gauche} alt="flèche droite"></img> </button>
            <p>{currentSlide} / {imgLogement.length} </p>
        </>
    )
}

export default Slideshow