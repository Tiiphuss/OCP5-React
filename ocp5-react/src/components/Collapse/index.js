import { useState } from 'react'
import Vector from '../../assets/Vector.png'
import '../../styles/Collapse.scss'

function Collapse({ titre, contenu }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
        setActive(!isActive);
    };

    // return isOpen ? (
    return (
        
            <div className='affichage'>
                <div className='orga'>
                    <div className='divCollapse'>
                        <p className='divCollapseTXT'>{titre}</p> 
                        <button onClick={() => {setIsOpen(!isOpen); ToggleClass()}} className={isActive ? "btnCollapseO" : "btnCollapse"}> <img src={Vector} alt='Flèche'></img> </button>
                    </div>
                
                    <div className='contenuCollapse'>
                        {isOpen && <p>{contenu}</p>}
                    </div> 
                </div>
            </div>    
    )
                              
    //) :
    // (
        // <div className='affichage'>
            // <div className='orga'> 
                // <div className='divCollapse'>
                    // <p className='divCollapseTXT'>{titre}</p>    
                    // <button onClick={() => setIsOpen(true)} className='btnCollapse'> <img src={Vector} alt='Flèche'></img> </button>
                // </div>
            // </div>
        // </div>        
    // )
}

export default Collapse