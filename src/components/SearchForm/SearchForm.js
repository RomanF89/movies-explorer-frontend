import './SearchForm.css';

function SearchForm() {
  return (
    <div className='search-films'>
      <form className='search-films__form' name='search-form'>
        <input className='search-films__input' id='search-films' name='search' type='search' placeholder='Фильм' required={true} ></input>
        <div className='search-films__search-button-area'>
          <button className='search-films__search-button' type='submit' aria-label='Поиск фильмов'></button>
        </div>
        <div className='search-films__switch-button-area'>
          <div className='search-films__buttons-separator'></div>
          <button className='search-films__switch-button search-films__switch-button_type_off' type='button' aria-label='Переключиться на короткометражки'></button>
          <p className='search-films__button-title'>Короткометражки</p>
        </div>
      </form>
      <div className='search-films__underline'></div>
    </div>
  )
}

export default SearchForm;
