import '../../styles/Accueil.scss'
import Paysage from '../../assets/Paysage accueil.png'
import Banner from '../../components/Banner';
import Card from '../../components/Card';

function Accueil() {
  return (
    <main>
      <Banner>
        <div>
            <img className='imageAccueil' src={Paysage} alt='Paysage'></img>
        </div>
        <h1 className='titreAccueil'>Chez vous, partout et ailleurs</h1>
      </Banner>
      <Card />
    </main>
  )
}

export default Accueil;
