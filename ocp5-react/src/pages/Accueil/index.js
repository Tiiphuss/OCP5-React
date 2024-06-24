import '../../styles/Accueil.scss'
import Paysage from '../../assets/Paysage accueil.png'

function Accueil() {
  return (
    <main>
      <div className='divAccueil'>
        <img className='imageAccueil' src={Paysage} alt='Paysage' />
      </div>
      <h1 className='titreAccueil'>Chez vous, partout et ailleurs</h1>
    </main>
  )
}

export default Accueil;
