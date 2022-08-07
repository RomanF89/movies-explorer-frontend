import './MoviesCard.css';

function MoviesCard({ title, movieDuration, imgLink, movie, handleSaveMovie, handleDeleteMovie, savedMovies, savedMovie }) {


  const baseUrl = 'https://api.nomoreparties.co';

  let country, director, duration, year, description, image, trailerLink, nameRU, nameEN, id, thumbnail, imageLink, currentMovie, isLiked, isButtonThemeDelete;

  if (savedMovie) {
    ({ country, director, duration, year, description, image, trailerLink, nameRU, nameEN, id } = savedMovie)
    thumbnail = savedMovie.thumbnail;
    imageLink = image;
    isLiked = true;
    isButtonThemeDelete = true;
    currentMovie = savedMovie;

  } else if (movie) {
    ({ country, director, duration, year, description, image, trailerLink, nameRU, nameEN, id } = movie)
    thumbnail = baseUrl + image.formats.thumbnail.url;
    imageLink = baseUrl + image.url;
    isLiked = savedMovies.find(savedmovie => savedmovie.movieId === id) ? true : false;
    currentMovie = (savedMovies.find(savedmovie => savedmovie.movieId === id));
  }

  const handleSave = () => {
    handleSaveMovie(country, director, duration, year, description, imageLink, trailerLink, nameRU, nameEN, thumbnail, id)
  }

  const handleDelete = () => {
    handleDeleteMovie(currentMovie._id)
  }

  return (
    <article className='card'>
      <div className='card__info'>
        <h2 className='card__title'>{title}</h2>
        <p className='card__duration'>{movieDuration} минут</p>
      </div>
      <a className='card__image-link' href={trailerLink} target='_blank' rel="noreferrer" >
      <img className='card__image' alt='Обложка фильма' src={imgLink} ></img>
      </a>
      <button className={`card__save-button ${isButtonThemeDelete ? 'card__save-button_delete' : ''} ${isLiked ? 'card__save-button_saved' : ''}`}
        type='button' aria-label='Сохранить' onClick={!isLiked ? handleSave : handleDelete} >Сохранить</button>
    </article>
  )
}

export default MoviesCard;
