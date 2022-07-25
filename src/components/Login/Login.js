import './Login.css';
import { Link } from 'react-router-dom';
import Authentication from '../Authentication/Authentication'
import '../Authentication/Authentication.css'


function Login() {
  return (
    <Authentication>
        <form className='authentication__form authentication__form_type_login' name='login-form' >
          <fieldset className='authentication__fields authentication__fields_type_login'>
            <div className='authentication__field'>
              <label className='authentication__label'>E-mail</label>
              <input className='authentication__input authentication__input_type_email' id='login-email' name='email' type='email' required></input>
            </div>
            <div className='authentication__field'>
              <label className='authentication__label'>Пароль</label>
              <input className='authentication__input authentication__input_type_password' id='login-password' name='password' type='password' required></input>
            </div>
            <span id="auth-error" className="authentication__error-message">
              Что-то пошло не так...</span>
          </fieldset>
          <button className='authentication__submit' type='submit' aria-label='Зарегистрироваться'>Войти</button>
        </form>
        <div className="authentication__redirect">Уже зарегистрированы?
          <Link className="authentication__redirect-link" to="/sign-up">Регистрация</Link>
          </div>
    </Authentication>
  )
}

export default Login;
