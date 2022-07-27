import './Promo.css'
import promoLogo from '../../images/promoLogo.svg';

function Promo() {
  return (
    <section className="promo">
      <img className='promo__logo' src={promoLogo} alt='Логотип' />
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
    </section>
  )
}

export default Promo;
