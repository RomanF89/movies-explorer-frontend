import './MoviesCardList.css';

function MoviesCardList({ cards, isSavedMoviesTheme }) {
  if (isSavedMoviesTheme) {
    return (
      <section className='movies__list'>
        <div className='movies__cards movies__cards_theme_saved'>
          {cards}
        </div>
      </section>
    )
  } else {
    return (
      <section className='movies__list'>
        <div className='movies__cards'>
          {cards}
        </div>
        <button className='movies__more-button' type='button' aria-label='Еще'>Еще</button>
      </section>
    )
  }
}

export default MoviesCardList;
