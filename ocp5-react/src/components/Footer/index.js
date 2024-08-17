import '../../styles/Footer.scss'
import Logo from '../../assets/Logo Footer.png'
import Copyright from '../../assets/Copyright Footer.png'

function Footer() {
    return (
        <footer>
            <img src={Logo} alt='Logo Footer' />
            <p className='copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
            
        
)}

export default Footer