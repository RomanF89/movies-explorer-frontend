import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__title-line'></div>
      <div className='footer__info'>
        <p className='footer__copyright'>&copy; {new Date().getFullYear()}</p>
        <ul className='footer__links'>
          <li className='footer__links-item'>
            <a className='footer__link' href='https://practicum.yandex.ru' target='_blank' rel='noreferrer' >Яндекс.Практикум</a>
          </li>
          <li className='footer__links-item'>
            <a className='footer__link' href='https://github.com/RomanF89' target='_blank' rel='noreferrer' >Github</a>
          </li>
          <li className='footer__links-item'>
            <a className='footer__link' href='https://ru-ru.facebook.com' target='_blank' rel='noreferrer' >Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
