import './Authentication.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'


function Authentication(props) {
  return (
    <section className='authentication'>
      <div className='authentication__section'>
        <div className='authentication__header'>
          <Link className='authentication__head-link' to='/'>
            <img className='authentication__head-image' src={logo} alt='Логотип'></img>
          </Link>
          <h2 className='authentication__title'>{props.title}</h2>
        </div>
        {props.children}
      </div>
    </section>
  )
}

export default Authentication;
