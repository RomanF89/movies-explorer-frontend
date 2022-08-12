import './SearchForm.css';
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';


function SearchForm({ location, handleSubmitSearchForm, moviesErrMessage, currentSearchValue, durationStatus, changeDurationStatus, savedMoviesLastSearch }) {

  const [searchData, setSearchData] = useState('');
  const [currentDurationStatus, setCurrentDurationStatus] = useState(false);
  const currentLocation = location.pathname;

  function onChangeSearch(e) {
    setSearchData(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitSearchForm(searchData, currentDurationStatus);
  }

  function changeDurationStatuss() {
    if (currentDurationStatus) {
      setCurrentDurationStatus(false);
    } else if (!currentDurationStatus) {
      setCurrentDurationStatus(true)
    }
    // Фильмы не фильтруются при изменении значения поискового запроса
    if (searchData === (currentSearchValue || savedMoviesLastSearch)) {
      changeDurationStatus(currentLocation);
    }
  }

  useEffect(() => {
    setSearchData(currentSearchValue)
  }, [])

  useEffect(() => {
    setCurrentDurationStatus(durationStatus)
  }, [])

  return (
    <div className='search-films'>
      <form className='search-films__form' name='search-form' onSubmit={handleSubmit}>
        <input className='search-films__input' id='search-films' name='search' type='text' placeholder='Фильм' defaultValue={currentSearchValue} onChange={onChangeSearch}></input>
        <div className='search-films__search-button-area'>
          <button className='search-films__search-button' type='submit' aria-label='Поиск фильмов'></button>
        </div>
        <div className='search-films__switch-button-area'>
          <div className='search-films__buttons-separator'></div>
          <button className={`search-films__switch-button ${!currentDurationStatus ? 'search-films__switch-button_type_off' : ''}`} onClick={changeDurationStatuss} type='button' aria-label='Переключиться на короткометражки'></button>
          <p className='search-films__button-title'>Короткометражки</p>
        </div>
      </form>
      <span className='search-films__error-message'>{moviesErrMessage}</span>
      <div className='search-films__underline'></div>
    </div>
  )
}

export default withRouter(SearchForm);
