import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';


function Movies() {
  return (
    <section className='movies'>
      <SearchForm></SearchForm>
      <MoviesCardList
        cards={<>
          <MoviesCard isSaved={true} />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard isSaved={true} />
        </>
        } />
    </section>
  )
}

export default Movies;
