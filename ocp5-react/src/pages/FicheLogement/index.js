import {useParams } from "react-router-dom"
import Slideshow from "../../components/Slideshow"
import Collapse from "../../components/Collapse"
import { Logements } from "../../datas/logements.js"
import EtoilePleine from "../../assets/EtoilePleine.png"
import EtoileVide from "../../assets/EtoileVide.png"
import "../../styles/FicheLogement.scss"
import { Navigate } from "react-router-dom"

function FicheLogement() {
    
    const {id} = useParams();
    const currentLogement = Logements.find((logement) => logement.id === id);
    
    const equip = 
    currentLogement.equipments.map((equipement) =>
        <li key={equipement}>{equipement}</li>
    );

    const tags = 
    currentLogement.tags.map((tag) =>
        <p key={tag} className="tag">{tag}</p>
    );

    const range =[1,2,3,4,5]
    const rating = currentLogement.rating

    const logementRating = 
    range.map((chiffre) =>
        rating >= chiffre ? <img key={chiffre} className="etoile" src={EtoilePleine} alt="Etoile Pleine"/> : <img key={chiffre} className="etoile" src={EtoileVide} alt="Etoile Vide"/>
)


    if (currentLogement.id !== id) {<Navigate to="/404"/>}
    console.log(id);
    console.log(currentLogement.id);
    
    
    
    return(
        <>
        <main>
            <Slideshow imgLogement={currentLogement.pictures}/>
            <div className="presentation">
                <h1 className="titreLogement">{currentLogement.title}</h1>
                <div className="infosHote">
                    <p className="nomHote">{currentLogement.host.name}</p>
                    <img className="imgHote" src={currentLogement.host.picture} alt="L'hôte"/>
                </div>
            </div>
            <p className="locationLogement">{currentLogement.location}</p>
            <div className="tagsRatings">
                <div className="listeTags">
                    {tags}
                </div>
                <div className="ratings">
                    {logementRating}
                </div>
            </div>
            <div className="collapses">
                <div className="collapseDescription"> <Collapse titre="Description" contenu={currentLogement.description} /> </div>
                <div className="collapseEquipements"> <Collapse titre="Equipements" contenu={equip} /> </div>
            </div>
        </main>  
        </>
    )
}

export default FicheLogement