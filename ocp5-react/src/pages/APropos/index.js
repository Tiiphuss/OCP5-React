import Paysage from '../../assets/Paysage APropos.png'
import '../../styles/APropos.scss'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import { Infos } from '../../datas/CollapseInfo.js'

function APropos() {
    return (
        <main>
            <Banner src={Paysage} title="" classname={"imageApropos"}/>
            <div className='collapsesApropos'>
                <Collapse titre={Infos[0].title} contenu={Infos[0].content}/>
                <Collapse titre={Infos[1].title} contenu={Infos[1].content}/>
                <Collapse titre={Infos[2].title} contenu={Infos[2].content}/>
                <Collapse titre={Infos[3].title} contenu={Infos[3].content}/>
            </div>
        </main>    
    )
}

export default APropos