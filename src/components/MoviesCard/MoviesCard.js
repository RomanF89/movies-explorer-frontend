import './MoviesCard.css';
import movie from '../../images/film.svg'

function MoviesCard({ isSaved, isButtonThemeDelete }) {
  return (
    <article className='card'>
      <div className='card__info'>
        <h2 className='card__title'>В погоне за Бенкси</h2>
        <p className='card__duration'>27 минут</p>
      </div>
      <img className='card__image' alt='Обложка фильма' src={movie} ></img>
      <button className={`card__save-button ${isButtonThemeDelete ? 'card__save-button_delete' : ''} ${isSaved ? 'card__save-button_saved' : ''}`}
        type='button' aria-label='Сохранить' >Сохранить</button>
    </article>
  )
}

export default MoviesCard;
