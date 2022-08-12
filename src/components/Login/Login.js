import './Login.css';
import { Link } from 'react-router-dom';
import Authentication from '../Authentication/Authentication'
import '../Authentication/Authentication.css'
import UserFormValidation from '../UserFormValidation/UserFormValidation';
import { EmailRegExp } from '../../utils/Constants';


function Login({ handleLogin, loginErrMessage }) {


  const { values, handleChange, errors, isValid, resetForm } = UserFormValidation({
    password: (value) => {
      if (!value) {
        return 'Необходимо заполнить это поле'
      } else if (value.length < 4) {
        return 'Минимальное количество символов - 4'
      }
      return '';
    },
    email: (value) => {
      if (!value) {
        return 'Необходимо заполнить это поле'
      } else if (!EmailRegExp.test(value)) {
        return 'Поле не соотвествует адресу электронной почты'
      }
      return '';
    }
  });

  const handleSubmit = (e) => {
    const { email, password } = values;
    e.preventDefault();
    handleLogin(email, password);
  }

  return (
    <Authentication title={'Рады видеть!'} >
      <form className='authentication__form authentication__form_type_login' name='login-form' noValidate onSubmit={handleSubmit}>
        <fieldset className='authentication__fields authentication__fields_type_login'>
          <div className='authentication__field'>
            <label className='authentication__label'>E-mail</label>
            <input className='authentication__input authentication__input_type_email' id='login-email' name='email' type='email' required onChange={handleChange}></input>
            {Object.keys(errors).map((errorKey, index) => (
              errorKey === 'email' ? <span className='authentication__error' key={index}>{errors[errorKey]}</span> : ''
            ))}
          </div>
          <div className='authentication__field'>
            <label className='authentication__label'>Пароль</label>
            <input className='authentication__input authentication__input_type_password' id='login-password' name='password' type='password' onChange={handleChange} required></input>
            {Object.keys(errors).map((errorKey, index) => (
              errorKey === 'password' ? <span className='authentication__error' key={index}>{errors[errorKey]}</span> : ''
            ))}
          </div>
        </fieldset>
        <span id="auth-error" className="authentication__error-message">{loginErrMessage}</span>
        <button className={`authentication__submit ${!isValid ? 'authentication__submit_type_disabled' : ''} type='submit' aria-label='Войти`} disabled={!isValid}>Войти</button>
      </form>
      <div className="authentication__redirect">Уже зарегистрированы?
        <Link className="authentication__redirect-link" to="/sign-up">Регистрация</Link>
      </div>
    </Authentication>
  )
}

export default Login;
