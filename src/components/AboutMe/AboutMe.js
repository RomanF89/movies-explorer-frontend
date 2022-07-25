import './AboutMe.css';
import myPhoto from '../../images/myPhoto.svg'
import MainComponentTitle from '../MainComponentTitle/MainComponentTitle';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <MainComponentTitle
        componentTitle={'Студент'}
      />
      <div className='about-me__student'>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Роман</h3>
          <p className='about-me__caption'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании
            «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл
            с постоянной работы.</p>
          <ul className='about-me__links'>
            <li className='about-me__item'>
              <a className='about-me__link' href='https://ru-ru.facebook.com' target='_blank' rel='noreferrer' >Facebook</a>
            </li>
            <li className='about-me__item'>
              <a className='about-me__link' href='https://github.com/RomanF89' target='_blank' rel='noreferrer' >Github</a>
            </li>
          </ul>
        </div>
        <img className='about-me__photo' src={myPhoto} alt='Фото студента' />
      </div>
    </section>
  )
}

export default AboutMe;
