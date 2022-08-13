import './NavigationPopup.css';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


function NavigationPopup({ location, isOpen, handleNavigationPopup }) {

  const currentLocation = location.pathname;

  function handleClose () {
    handleNavigationPopup(false);
  }

  return (
    <section className={`popup popup_type_navigation ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <button className='popup__close-button' type='button' aria-label='Закрыть' onClick={handleClose} ></button>
        <div className='popup__navigation'>
          <Link className='popup__navigation-link' to='/'>Главная</Link>
          <Link className={`popup__navigation-link
              ${currentLocation === '/movies' ? 'popup__navigation-link_type_active' : ''}`} to='/movies'>Фильмы</Link>
          <Link className={`popup__navigation-link
              ${currentLocation === '/saved-movies' ? 'popup__navigation-link_type_active' : ''}`} to='/saved-movies'>Сохраненные фильмы</Link>
        </div>
        <div className='popup__auth'>
          <Link to='/profile' className='popup__profile-link'>Аккаунт
            <div className='popup__auth-image' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default withRouter(NavigationPopup);
