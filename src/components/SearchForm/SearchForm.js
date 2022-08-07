import './SearchForm.css';
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';


function SearchForm({handleSubmitSearchForm, moviesErrMessage, currentSearchValue}) {

  const savedDurationStatus = JSON.parse(localStorage.getItem('durationStatus'))

  const [ searchData, setSearchData] = useState('');
  const [ durationStatus, setDurationStatus] = useState(savedDurationStatus);

  function onChangeSearch(e) {
    setSearchData(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitSearchForm(searchData, durationStatus);
  }

  function changeDurationStatus () {
    if (durationStatus) {
      setDurationStatus(false);
    } else {
      setDurationStatus(true)
    }
  }

  useEffect(()=> {
    setSearchData(currentSearchValue)
  },[currentSearchValue])

  useEffect(()=> {
    localStorage.setItem('durationStatus', durationStatus )
  },[durationStatus])

  return (
    <div className='search-films'>
      <form className='search-films__form' name='search-form' onSubmit={handleSubmit}>
        <input className='search-films__input' id='search-films' name='search' type='text' placeholder='Фильм' defaultValue={currentSearchValue} onChange={onChangeSearch} ></input>
        <div className='search-films__search-button-area'>
          <button className='search-films__search-button' type='submit' aria-label='Поиск фильмов'></button>
        </div>
        <div className='search-films__switch-button-area'>
          <div className='search-films__buttons-separator'></div>
          <button className={`search-films__switch-button ${!durationStatus ? 'search-films__switch-button_type_off' : ''}`} onClick={changeDurationStatus} type='button' aria-label='Переключиться на короткометражки'></button>
          <p className='search-films__button-title'>Короткометражки</p>
        </div>
      </form>
      <span className='search-films__error-message'>{moviesErrMessage}</span>
      <div className='search-films__underline'></div>
    </div>
  )
}

export default withRouter(SearchForm);
