import React, { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader'
import './MoviesCardList.css';


function MoviesCardList({ movies, isSavedMoviesTheme, isPreloaderActive, searchErrMessage , handleSaveMovie, handleDeleteMovie ,savedMovies ,savedMoviesList}) {


  const windowWidth = window.screen.width;
  const baseUrl = 'https://api.nomoreparties.co';

  const currentMoviesValue = (windowWidth >= 320 & windowWidth <= 480) ? 5 : (windowWidth >= 481 & windowWidth <= 768) ? 8 : 12;
  const moreMoviesValue = (windowWidth >= 320 & windowWidth <= 480) ? 1 : (windowWidth >= 481 & windowWidth <= 768) ? 2 : 3;


  const [itemsToShow, setItemsToShow] = useState(currentMoviesValue);

  function moreButtonHandler() {
    setItemsToShow(itemsToShow + moreMoviesValue);
  }


  if (isSavedMoviesTheme) {
    return (
      <section className='movies__list'>
        <span className='movies__error-message' >{searchErrMessage}</span>
        <div className='movies__cards movies__cards_theme_saved'>
        {
            savedMoviesList.map(savedItem => (
              <MoviesCard
                savedMovies={savedMoviesList}
                handleSaveMovie={handleSaveMovie}
                handleDeleteMovie={handleDeleteMovie}
                savedMovie={savedItem}
                title={savedItem.nameRU}
                movieDuration={savedItem.duration}
                imgLink={savedItem.image}
                key={savedItem._id}
              />
            ))
          }
        </div>
      </section>
    )
  } else {
    return (
      <section className='movies__list'>
        <Preloader isPreloaderActive={isPreloaderActive} />
        <span className='movies__error-message' >{searchErrMessage}</span>
        <div className='movies__cards'>
          {
            movies.slice(0, itemsToShow).map(item => (
              <MoviesCard
                savedMovies={savedMovies}
                handleSaveMovie={handleSaveMovie}
                handleDeleteMovie={handleDeleteMovie}
                movie={item}
                title={item.nameRU}
                movieDuration={item.duration}
                imgLink={`${baseUrl}${item.image.url}`}
                key={item.id}
              />
            ))
          }
        </div>
        <button onClick={moreButtonHandler}
          className={`movies__more-button ${movies.length > currentMoviesValue ? 'movies__more-button_type_enabled' : ''}
          ${movies.length <= itemsToShow ? 'movies__more-button_type_disabled' : ''} `}
          type='button' aria-label='Еще'>Еще
        </button>
      </section>
    )
  }
}

export default MoviesCardList;
