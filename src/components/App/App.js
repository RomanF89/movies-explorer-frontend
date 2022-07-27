import './App.css';
import { Route, Switch } from 'react-router-dom';
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



function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path={"/"}>
          <Header
            headerTheme={'main'} >
          </Header>
          <Main></Main>
          <Footer></Footer>
        </Route>

        <Route exact path={"/movies"}>
          <Header
            headerTheme={'movies'}>
          </Header>
          <Movies></Movies>
          <Footer></Footer>
        </Route>

        <Route exact path={"/saved-movies"}>
          <Header
            headerTheme={'movies'}>
          </Header>
          <SavedMovies></SavedMovies>
          <Footer></Footer>
        </Route>

        <Route exact path={"/profile"}>
          <Header
            headerTheme={'movies'}>
          </Header>
          <Profile></Profile>
        </Route>

        <Route exact path={"/sign-up"} >
          <Register></Register>
        </Route>

        <Route exact path={"/sign-in"} >
          <Login></Login>
        </Route>

        <Route exact path={"/404"} >
          <NotFound></NotFound>
        </Route>

      </Switch>

      <NavigationPopup
        isOpen={false}>
      </NavigationPopup>

    </div>
  );
}

export default App;
