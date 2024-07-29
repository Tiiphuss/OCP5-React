import { useParams } from "react-router-dom"
import Slideshow from "../../components/Slideshow"
import Collapse from "../../components/Collapse"
import { Logements } from "../../datas/logements.js"

function FicheLogement() {
    const {id} = useParams()
    console.log(id)
    const currentLogement = Logements.find((logement) => logement.id === id);
    
    return(
        <>
            <Slideshow imgLogement={currentLogement.pictures}/>
            <Collapse titre="Description" contenu={currentLogement.description} />
        </>
    )
}

export default FicheLogement