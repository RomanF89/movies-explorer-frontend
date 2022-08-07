import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { withRouter } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import NavigationPopup from '../NavigationPopup/NavigationPopup';
import SearchForm from '../SearchForm/SearchForm';
import { getMovies } from '../../utils/MoviesApi';
import { register, login, getCurrentUser, updateProfile, unlogin, saveMovie, deleteMovie, getSavedMovies } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App({ location }) {

  const [movies, setMovies] = useState([]);
  const [preloader, setPreloader] = useState(false);
  const [searchErrMessage, setSearchErrMessage] = useState('');
  const [moviesErrMessage, setMoviesErrMessage] = useState('');
  const [registerErrMessage, setRegisterErrMessage] = useState('');
  const [loginErrMessage, setLoginErrMessage] = useState('');
  const [profileErrMessage, setProfileErrMessage] = useState('');
  const [profileSuccessMessage, setProfileSuccessMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isNavigationPopupOpen, setIsNavigationPopupOpen] = useState(false);

  const currentSearchValue = localStorage.getItem('request');
  const currentLocation = location.pathname;
  const history = useHistory();

  const searchReg = /[\w\-а-я\sё]/gi;

  const getMoviesFromRequest = (data, durationStatus) => {
    resetMessages();
    if (data === ('')) {
      setMoviesErrMessage('Нужно ввести ключевое слово')
      return
    }
    const searchData = data.toLowerCase().split(' ').filter(Boolean);
    setPreloader(true);

    getMovies()
      .then((res) => {
        const movies = res;
        return movies;
      })
      .then((movies) => {
        let currentMovies = movies.filter(m =>
          searchData.some(searchItem =>
            ((m.nameRU ? ((m.nameRU.match(searchReg).join('').toLowerCase().split(' ')).some(movieItem => movieItem.startsWith(searchItem))) : ''))
            || ((m.nameEN ? ((m.nameEN.match(searchReg).join('').toLowerCase().split(' ')).some(movieItem => movieItem.startsWith(searchItem))) : ''))
          )
            ? m : '')
        if (durationStatus) {
          const shortMovies = currentMovies.filter((movie) => movie.duration <= 40);
          setMovies(shortMovies)
          localStorage.setItem('movies', JSON.stringify(shortMovies))
        } else if (!durationStatus) {
          setMovies(currentMovies);
          localStorage.setItem('movies', JSON.stringify(currentMovies))
        } else if (currentMovies.length === 0) {
          setSearchErrMessage('Ничего не найдено');
        }
        localStorage.setItem('request', data)
      })
      .catch(err => {
        console.log(err)
        setSearchErrMessage(`«Во время запроса произошла ошибка.
          Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз»`);
      })
      .finally(() => setPreloader(false))
  }

  const searchSavedMovies = (data, durationStatus) => {
    resetMessages();
    if (data === ('')) {
      setMoviesErrMessage('Нужно ввести ключевое слово')
      return
    }
    const searchData = data.toLowerCase().split(' ').filter(Boolean);

    let currentMovies = savedMovies.filter(m =>
      searchData.some(searchItem =>
        ((m.nameRU ? ((m.nameRU.match(searchReg).join('').toLowerCase().split(' ')).some(movieItem => movieItem.startsWith(searchItem))) : ''))
        || ((m.nameEN ? ((m.nameEN.match(searchReg).join('').toLowerCase().split(' ')).some(movieItem => movieItem.startsWith(searchItem))) : ''))
      )
        ? m : '')
    if (currentMovies.length === 0) {
      setSearchErrMessage('Ничего не найдено');
      return
    }
    if (durationStatus) {
      const shortMovies = currentMovies.filter((movie) => movie.duration <= 40);
      setSavedMovies(shortMovies)
    } else if (!durationStatus) {
      setSavedMovies(currentMovies);
    }
    localStorage.setItem('request', data)
  }

  const getSavedMoviesFromRequest = () => {
    getSavedMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleRegister = (name, email, password) => {
    register(name, email, password)
      .then((res) => {
        history.push('/sign-in');
      })
      .catch((err) => {
        console.log(err);
        if (err.message === 'This email already exists') {
          setRegisterErrMessage('Пользователь с таким email уже существует.');
        } else if (err.message === 'Server error') {
          setRegisterErrMessage('500 На сервере произошла ошибка.');
        } else {
          setRegisterErrMessage('При регистрации пользователя произошла ошибка');
        }
      });
  }

  const handleLogin = (email, password) => {
    login(email, password)
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        tokenCheck();
      })
      .catch((err) => {
        console.log(err)
        if (err.message === 'email or password are incorrect') {
          setLoginErrMessage('Вы ввели неправильный логин или пароль.');
        } else if (err.message === 'Server error') {
          setLoginErrMessage('500 На сервере произошла ошибка.');
        }
      })
  }

  const handleSignOut = () => {
    unlogin()
      .then((res) => {
        console.log(res)
        setLoggedIn(false);
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      })
  }

  const tokenCheck = () => {
    getCurrentUser()
      .then((res) => {
        if (res.message === 'Need authorization') {
          throw res;
        } else if (res.email) {
          setCurrentUser(res);
          setLoggedIn(true);
          history.push('/movies');
        } else {
          setLoggedIn(false);
          history.push('/sign-in');
        }
      })
      .catch(err => {
        console.log(err)
        if (err.message === 'Server error') {
          setLoginErrMessage('500 На сервере произошла ошибка.');
        }
        setLoginErrMessage('При авторизации произошла ошибка. Токен не передан или передан не в том формате.');
      })
  }

  const handleUpdateProfile = (name, email) => {
    console.log(name, email)
    resetMessages()

    updateProfile(name, email)
      .then((res) => {
        setCurrentUser(res);
        setProfileSuccessMessage('Пользователь успешно обновлён');
      })
      .catch(err => {
        console.log(err);
        if (err.message === 'This email already exists') {
          setProfileErrMessage('Пользователь с таким email уже существует.');
        } else if (err.message === 'Server error') {
          setProfileErrMessage('500 На сервере произошла ошибка.');
        } else {
          setProfileErrMessage('При обновлении профиля произошла ошибка');
        }
      });
  }

  const handleSaveMovie = (country, director, duration, year, description, imageLink, trailerLink, nameRU, nameEN, thumbnail, id) => {
    saveMovie(country, director, duration, year, description, imageLink, trailerLink, nameRU, nameEN, thumbnail, id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => { getSavedMoviesFromRequest() })
  }

  const handleDeleteMovie = (movieId) => {
    deleteMovie(movieId)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => { getSavedMoviesFromRequest() })
  }

  const handleNavigationPopup = (value) => {
    setIsNavigationPopupOpen(value);
  }

  const resetMessages = () => {
    setProfileSuccessMessage(' ');
    setProfileErrMessage(' ');
    setRegisterErrMessage(' ');
    setSearchErrMessage(' ');
    setMoviesErrMessage(' ');
    setLoginErrMessage(' ');
  }

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('movies'))
    setMovies(movies);
  }, []);


  useEffect(() => {
    if (loggedIn) {
      getSavedMoviesFromRequest();
      setIsNavigationPopupOpen(false);
    }
    resetMessages();
  }, [currentLocation]);

  // useEffect(() => {
  //   tokenCheck();
  // }, []);

  useEffect(() => {
    if (loggedIn) {
      history.push("/movies");
      return;
    }
    history.push('/');
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Switch>

          <Route exact path={"/"}>
            <Header
              loggedIn={loggedIn}
              headerTheme={'main'} >
            </Header>
            <Main></Main>
            <Footer></Footer>
          </Route>

          <ProtectedRoute loggedIn={loggedIn} exact path={"/movies"}>
            <Header
              headerTheme={'movies'}
              handleNavigationPopup={handleNavigationPopup}>
            </Header>
            <SearchForm
              currentSearchValue={currentSearchValue}
              moviesErrMessage={moviesErrMessage}
              handleSubmitSearchForm={getMoviesFromRequest}>
            </SearchForm>
            <Movies
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
              isPreloaderActive={preloader}
              movies={movies}
              savedMovies={savedMovies}
              searchErrMessage={searchErrMessage}>
            </Movies>
            <Footer></Footer>
            <NavigationPopup
              handleNavigationPopup={handleNavigationPopup}
              isOpen={isNavigationPopupOpen}>
            </NavigationPopup>
          </ProtectedRoute>

          <ProtectedRoute loggedIn={loggedIn} exact path={"/saved-movies"}>
            <Header
              headerTheme={'movies'}
              handleNavigationPopup={handleNavigationPopup}>
            </Header>
            <SearchForm
              moviesErrMessage={moviesErrMessage}
              currentSearchValue={currentSearchValue}
              handleSubmitSearchForm={searchSavedMovies}>
            </SearchForm>
            <SavedMovies
              handleDeleteMovie={handleDeleteMovie}
              savedMoviesList={savedMovies}
              searchErrMessage={searchErrMessage}>
            </SavedMovies>
            <Footer></Footer>
            <NavigationPopup
              handleNavigationPopup={handleNavigationPopup}
              isOpen={isNavigationPopupOpen}>
            </NavigationPopup>
          </ProtectedRoute>

          <ProtectedRoute loggedIn={loggedIn} exact path={"/profile"}>
            <Header
              headerTheme={'movies'}
              handleNavigationPopup={handleNavigationPopup}>
            </Header>
            <Profile
              handleUpdateProfile={handleUpdateProfile}
              handleSignOut={handleSignOut}
              profileErrMessage={profileErrMessage}
              profileSuccessMessage={profileSuccessMessage}>
            </Profile>
            <NavigationPopup
              handleNavigationPopup={handleNavigationPopup}
              isOpen={isNavigationPopupOpen}>
            </NavigationPopup>
          </ProtectedRoute>

          <Route exact path={"/sign-up"} >
            <Register
              registerErrMessage={registerErrMessage}
              handleRegister={handleRegister}>
            </Register>
          </Route>

          <Route exact path={"/sign-in"} >
            <Login
              loginErrMessage={loginErrMessage}
              handleLogin={handleLogin}>
            </Login>
          </Route>

          <Route exact path={"*"} >
            <NotFound></NotFound>
          </Route>

        </Switch>

      </div>
    </CurrentUserContext.Provider>
  );
}
export default withRouter(App);
