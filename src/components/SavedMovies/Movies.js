import './Movies.css';
import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';

function Movies() {
  return (
    <section className='movies'>
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
    </section>
  )
}

export default Movies;
