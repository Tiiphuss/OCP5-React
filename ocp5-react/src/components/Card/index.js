import { Logements } from "../../datas/logements.js"
import '../../styles/Card.scss'
import { NavLink } from "react-router-dom"

function Card() {
    return (    
    <div className="Gallery">
        {Logements.map((logement) => (
                <div key={logement.id} className="Card">
                    <NavLink to={`/fichelogement/${logement.id}`}>
                        <img src={logement.cover} alt={logement.title}></img> 
                    </NavLink>
                        <p>{logement.title}</p>
                </div>
        ))}
    </div>
    )
}

export default Card