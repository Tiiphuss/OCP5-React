import { useParams } from "react-router-dom"
import Slideshow from "../../components/Slideshow"
import Collapse from "../../components/Collapse"
import { Logements } from "../../datas/logements.js"
import { useState } from "react"
import "../../styles/FicheLogement.scss"

function FicheLogement() {
    const {id} = useParams()
    console.log(id)
    const currentLogement = Logements.find((logement) => logement.id === id);
    const equip = 
    currentLogement.equipments.map((equipement) =>
        <li>{equipement}</li>
    );

     // <ul>
        //<li>{currentLogement.equipments[0]}</li>
        //<li>{currentLogement.equipments[1]}</li>
        //<li>{currentLogement.equipments[2]}</li>
        //<li>{currentLogement.equipments[3]}</li>
        //<li>{currentLogement.equipments[4]}</li>
        //<li>{currentLogement.equipments[5]}</li>
        //<li>{currentLogement.equipments[6]}</li>
        //<li>{currentLogement.equipments[7]}</li>
        //<li>{currentLogement.equipments[8]}</li>
        //<li>{currentLogement.equipments[9]}</li>
    //</ul>
    
    return(
        <>
        <main>
            <Slideshow imgLogement={currentLogement.pictures}/>
            <div className="collapses">
                <div className="collapseDescription"> <Collapse titre="Description" contenu={currentLogement.description} /> </div>
                <div className="collapseEquipements"> <Collapse titre="Equipements" contenu={<ul> {equip} </ul>} /> </div>
            </div>
        </main>  
        </>
    )
}

export default FicheLogement