import { useState } from 'react'
import Vector from '../../assets/Vector.png'
import '../../styles/Collapse.scss'

function Collapse() {
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ? (
        <>
            <div className='orga'>
                <div className='divCollapse'>
                    <p className='texteCollapse'>Fiabilité</p> 
                    <button onClick={() => setIsOpen(false)} className='btnCollapseO'> <img src={Vector} alt='Flèche'></img> </button>
                </div>
            </div>    
                <p>TESTEST</p>
        </>

        
    ) :
    (
        <div className='orga'> 
            <div className='divCollapse'>
                <p>Fiabilité</p>    
                <button onClick={() => setIsOpen(true)} className='btnCollapse'> <img src={Vector} alt='Flèche'></img> </button>
            </div>
        </div>        
    )
}

export default Collapse