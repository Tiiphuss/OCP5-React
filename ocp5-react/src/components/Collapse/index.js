import { useState } from 'react'
import Vector from '../../assets/Vector.png'
import '../../styles/Collapse.scss'

function Collapse({ titre, contenu }) {
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ? (
        <>
            <div className='orga'>
                <div className='divCollapse'>
                    <p className='texteCollapse'>{titre}</p> 
                    <button onClick={() => setIsOpen(false)} className='btnCollapseO'> <img src={Vector} alt='Flèche'></img> </button>
                </div>
            </div>    
            <div className='contenuCollapse'>
                <p>{contenu}</p>
            </div>                
        </>

        
    ) :
    (
        <div className='orga'> 
            <div className='divCollapse'>
                <p>{titre}</p>    
                <button onClick={() => setIsOpen(true)} className='btnCollapse'> <img src={Vector} alt='Flèche'></img> </button>
            </div>
        </div>        
    )
}

export default Collapse