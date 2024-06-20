import '../../styles/Accueil.scss'
import Paysage from '../../assets/Paysage accueil.png'

function Accueil() {
  return (
    <main>
      <div>
        <img src={Paysage} alt='Paysage' />
      </div>
      <h1>Chez vous, partout et ailleurs</h1>
    </main>
  )
}

export default Accueil;
