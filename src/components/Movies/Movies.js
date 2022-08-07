import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({movies, isPreloaderActive, searchErrMessage, handleSaveMovie, handleDeleteMovie, savedMovies}) {
  return (
    <section className='movies'>
      <MoviesCardList
        handleSaveMovie={handleSaveMovie}
        handleDeleteMovie={handleDeleteMovie}
        savedMovies={savedMovies}
        movies={movies}
        isPreloaderActive={isPreloaderActive}
        searchErrorMessage={searchErrMessage} />
    </section>
  )
}

export default Movies;
