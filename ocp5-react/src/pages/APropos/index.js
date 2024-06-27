import Paysage from '../../assets/Paysage APropos.png'
import '../../styles/APropos.scss'
import Banner from '../../components/Banner'

function APropos() {
    return (
        <main>
            <Banner>
                <img className='imageApropos' src={Paysage} alt='Paysage' />
            </Banner>
        </main>    
    )
}

export default APropos