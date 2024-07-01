import Paysage from '../../assets/Paysage APropos.png'
import '../../styles/APropos.scss'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'

function APropos() {
    return (
        <main>
            <Banner src={Paysage} title="" classname={"imageApropos"}/>
            <Collapse />
        </main>    
    )
}

export default APropos