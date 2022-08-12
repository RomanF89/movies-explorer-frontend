import './Profile.css'
import UserFormValidation from '../UserFormValidation/UserFormValidation';
import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { NameRegExp, EmailRegExp } from '../../utils/Constants';


function Profile({handleUpdateProfile, handleSignOut, profileErrMessage, profileSuccessMessage}) {

  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, resetForm, setValues , setIsvalid } = UserFormValidation({
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

  const { name, email } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateProfile(name, email)
  }

  useEffect(()=> {
    setValues(currentUser)
  },[currentUser])

  useEffect(()=> {
    if ((name === currentUser.name) & (email === currentUser.email)) {
      setIsvalid(false);
    }
  },[values])


  return (
    <section className='profile'>
      <form className='profile__form' name='profile-form' onSubmit={handleSubmit} noValidate >
        <h2 className='profile__form-title'>Привет, {currentUser.name}</h2>
        <fieldset className='profile__fields'>
          <div className='profile__field-area'>
            <div className='profile__field'>
              <label className='profile__field-label'>Имя</label>
              <input className='profile__input' type='text' id='profile-name' name='name' required defaultValue={currentUser.name || ''} onChange={handleChange} ></input>
            </div>
            {Object.keys(errors).map((errorKey, index) => (
              errorKey === 'name' ? <span className='profile__input-error' key={index}>{errors[errorKey]}</span> : ''
            ))}
          </div>
          <div className='profile__field-area'>
          <div className='profile__field'>
            <label className='profile__field-label'>E-mail</label>
            <input className='profile__input' type='email' id='profile-email' name='email' required defaultValue={currentUser.email || ''} onChange={handleChange}></input>
          </div>
          {Object.keys(errors).map((errorKey, index) => (
            errorKey === 'email' ? <span className='profile__input-error' key={index}>{errors[errorKey]}</span> : ''
          ))}
          </div>
        </fieldset>
        <span id="profile-success" className="profile__success-message">{profileSuccessMessage}</span>
        <span id="profile-error" className="profile__error-message">{profileErrMessage}</span>
        <button className={`profile__submit ${!isValid ? 'profile__submit_type_disabled' : ''} type='submit' aria-label='Редактировать профиль`} disabled={!isValid}>Редактировать</button>
      </form>
      <button className='profile__exit' aria-label='Выйти из акканута' onClick={handleSignOut}>Выйти из аккаунта</button>
    </section>
  )
}

export default Profile;
