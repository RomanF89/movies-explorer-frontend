import './Portfolio.css';
import portfolioLink from '../../images/portfolioLink.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://romanf89.github.io/how-to-learn/index.html' target='_blank' rel='noreferrer' >
            <h3 className='portfolio__item-title'>Статичный сайт</h3>
            <img className='portfolio__link-image' src={portfolioLink} alt='Ссылка' />
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://romanf89.github.io/russian-travel/index.html' target='_blank' rel='noreferrer' >
            <h3 className='portfolio__item-title'>Адаптивный сайт</h3>
            <img className='portfolio__link-image' src={portfolioLink} alt='Ссылка' />
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://romanf89.github.io/mesto/' target='_blank' rel='noreferrer' >
            <h3 className='portfolio__item-title'>Одностраничное приложение</h3>
            <img className='portfolio__link-image' src={portfolioLink} alt='Ссылка' />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
