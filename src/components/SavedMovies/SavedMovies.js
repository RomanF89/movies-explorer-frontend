import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies() {
  return (
    <section className='movies'>
      <SearchForm></SearchForm>
      <MoviesCardList
        isSavedMoviesTheme={true}
        cards={<>
          <MoviesCard isButtonThemeDelete={true} />
          <MoviesCard isButtonThemeDelete={true} />
          <MoviesCard isButtonThemeDelete={true} />
        </>}
      />
    </section>
  )
}

export default SavedMovies;
