import { Logements } from "../../datas/logements.js"
import '../../styles/Card.scss'

function Card() {
    return (    
    <div className="Gallery">
        {Logements.map((Logements) => (
                <div key={Logements.id} className="Card">
                    <a href={"/fichelogement"}>
                        <img src={Logements.cover} alt={Logements.title}></img> 
                    </a>
                        <p>{Logements.title}</p>
                </div>
        ))}
    </div>
    )
}

export default Card