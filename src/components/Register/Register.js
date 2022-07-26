import './Register.css';
import { Link } from 'react-router-dom';
import Authentication from '../Authentication/Authentication'
import '../Authentication/Authentication.css'



function Register() {
  return (
    <Authentication title={'Добро пожаловать!'}>
        <form className='authentication__form authentication__form_type_regisrer' name='register-form' >
          <fieldset className='authentication__fields'>
            <div className='authentication__field'>
              <label className='authentication__label'>Имя</label>
              <input className='authentication__input authentication__input_type_name' id='register-name' name='name' type='text' required ></input>
            </div>
            <div className='authentication__field'>
              <label className='authentication__label'>E-mail</label>
              <input className='authentication__input authentication__input_type_email' id='register-email' name='email' type='email' required></input>
            </div>
            <div className='authentication__field'>
              <label className='authentication__label'>Пароль</label>
              <input className='authentication__input authentication__input_type_password' id='register-password' name='password' type='password' required></input>
            </div>
            <span id="auth-error" className="authentication__error-message authentication__error-message_visible">
              Что-то пошло не так...</span>
          </fieldset>
          <button className='authentication__submit' type='submit' aria-label='Зарегистрироваться'>Зарегистрироваться</button>
        </form>
        <div className="authentication__redirect">Уже зарегистрированы?
          <Link className="authentication__redirect-link" to="/sign-in">Войти</Link>
          </div>
    </Authentication>
  )
}

export default Register;
