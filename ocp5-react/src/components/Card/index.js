import { Logements } from "../../datas/logements"
import '../../styles/Card.scss'

function Card() {
    return (    
    <div className="Gallery">
        {Logements.map((Logements) => (
            <div key={Logements.id} className="Card">
            <img src={Logements.cover} alt={Logements.title}></img> 
            <p>{Logements.title}</p>
            </div>
        ))}
    </div>
    )
}

export default Card