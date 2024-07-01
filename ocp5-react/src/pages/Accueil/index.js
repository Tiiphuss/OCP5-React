import '../../styles/Accueil.scss'
import Paysage from '../../assets/Paysage accueil.png'
import Banner from '../../components/Banner';
import Card from '../../components/Card';

function Accueil() {
  return (
    <main>
      <Banner title="Chez vous, partout et ailleurs" src={Paysage} classname={'imageAccueil'} />
      <Card />
    </main>
  )
}

export default Accueil;
