import './Register.css';
import { Link } from 'react-router-dom';
import Authentication from '../Authentication/Authentication'
import '../Authentication/Authentication.css'
import UserFormValidation from '../UserFormValidation/UserFormValidation';
import { NameRegExp, EmailRegExp } from '../../utils/Constants';



function Register({handleRegister, registerErrMessage}) {

  const { values, handleChange, errors, isValid, resetForm } = UserFormValidation({
    password: (value) => {
      if (!value) {
        return 'Необходимо заполнить это поле'
      } else if (value.length < 2) {
        return 'Минимальное количество символов - 4'
      }
      return '';
    },
    name: (value) => {
      if (!value) {
        return 'Необходимо заполнить это поле'
      } else if (!NameRegExp.test(value)) {
        return 'Поле содержит недопустимые символы'
      } else if (value.length < 2) {
        return 'Минимальное количество символов - 2'
      } else if (value.length > 30) {
        return 'Максимальное количество символов - 30'
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
    const {name, email, password} = values;
    e.preventDefault();
    handleRegister(name, email, password);
  }


  return (
    <Authentication title={'Добро пожаловать!'}>
      <form className='authentication__form authentication__form_type_regisrer' name='register-form' onSubmit={handleSubmit} noValidate >

        <fieldset className='authentication__fields'>
          <div className='authentication__field'>
            <label className='authentication__label'>Имя</label>
            <input className='authentication__input authentication__input_type_name' onChange={handleChange} id='register-name' name='name' type='text' required ></input>
            {Object.keys(errors).map((errorKey, index) => (
              errorKey === 'name' ? <span className='authentication__error' key={index}>{errors[errorKey]}</span> : ''
            ))}
          </div>
          <div className='authentication__field'>
            <label className='authentication__label'>E-mail</label>
            <input className='authentication__input authentication__input_type_email' onChange={handleChange} id='register-email' name='email' type='email' required></input>
            {Object.keys(errors).map((errorKey, index) => (
              errorKey === 'email' ? <span className='authentication__error' key={index}>{errors[errorKey]}</span> : ''
            ))}
          </div>
          <div className='authentication__field'>
            <label className='authentication__label'>Пароль</label>
            <input className='authentication__input authentication__input_type_password' onChange={handleChange} id='register-password' name='password' type='password' required></input>
            {Object.keys(errors).map((errorKey, index) => (
              errorKey === 'password' ? <span className='authentication__error' key={index}>{errors[errorKey]}</span> : ''
            ))}
          </div>
        </fieldset>
        <span id="auth-error" className="authentication__error-message">{registerErrMessage}</span>
        <button className={`authentication__submit ${!isValid ? 'authentication__submit_type_disabled' : ''} type='submit' aria-label='Зарегистрироваться`} disabled={!isValid}>Зарегистрироваться</button>
      </form>
      <div className="authentication__redirect">Уже зарегистрированы?
        <Link className="authentication__redirect-link" to="/sign-in">Войти</Link>
      </div>
    </Authentication>
  )
}

export default Register;
