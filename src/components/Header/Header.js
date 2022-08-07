import logo from '../../images/logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function Header({ headerTheme, location, loggedIn, handleNavigationPopup }) {


  const currentLocation = location.pathname;

  function openHeaderMenu () {
    handleNavigationPopup(true);
  }

  if (headerTheme === 'main') {
    return (
      <header className={`header header_theme_main`}>
        <div className='header__area'>
          <Link className='header__logo-link' to='/'>
            <img className='header__logo' src={logo} alt='Логотип' />
          </Link>
          { loggedIn ? <div className='header__navigation header__navigation_type_active'>
            <Link className={`header__navigation-link
              ${currentLocation === '/movies' ? 'header__navigation-link_type_active' : ''}`} to='/movies'>Фильмы</Link>
            <Link className={`header__navigation-link
              ${currentLocation === '/saved-movies' ? 'header__navigation-link_type_active' : ''}`} to='/saved-movies'>Сохраненные фильмы</Link>
          </div>
            : <div className='header__auth'>
              <Link className='header__registration-link' to='/sign-up'>Регистрация</Link>
              <Link className='header__login-link' to='/sign-in'>Войти</Link>
            </div>
          }
        </div>
      </header>
    )
  }

  if (headerTheme === 'movies') {
    return (
      <header className={`header header_theme_movies`}>
        <div className='header__area'>
          <Link className='header__logo-link' to='/'>
            <img className='header__logo' src={logo} alt='Логотип' />
          </Link>
          <div className='header__navigation'>
            <Link className={`header__navigation-link
              ${currentLocation === '/movies' ? 'header__navigation-link_type_active' : ''}`} to='/movies'>Фильмы</Link>
            <Link className={`header__navigation-link
              ${currentLocation === '/saved-movies' ? 'header__navigation-link_type_active' : ''}`} to='/saved-movies'>Сохраненные фильмы</Link>
          </div>
          <div className='header__auth header__auth_type_movies'>
            <Link to='/profile' className='header__profile-link'>Аккаунт
              <div className='header__auth-image' />
            </Link>
          </div>
          <button onClick={openHeaderMenu} className='header__menu'></button>
        </div>
      </header>
    )
  }
}

export default withRouter(Header);
