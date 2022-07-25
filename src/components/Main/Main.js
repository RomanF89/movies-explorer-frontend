import './Main.css';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Technologies from '../Technologies/Technologies';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function Main() {
  return (
    <main className='main'>
      <Promo></Promo>
      <NavTab></NavTab>
      <AboutProject></AboutProject>
      <Technologies></Technologies>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
    </main>
  )
}

export default Main;
