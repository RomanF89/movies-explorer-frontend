import './SavedMovies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({savedMoviesList, handleDeleteMovie, searchErrMessage}) {
  return (
    <section className='movies'>
      <MoviesCardList
        searchErrMessage={searchErrMessage}
        isSavedMoviesTheme={true}
        savedMoviesList={savedMoviesList}
        handleDeleteMovie={handleDeleteMovie}
      />
    </section>
  )
}

export default SavedMovies;
