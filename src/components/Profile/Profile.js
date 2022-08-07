import './Profile.css'
import UserFormValidation from '../UserFormValidation/UserFormValidation';
import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


function Profile({handleUpdateProfile, handleSignOut, profileErrMessage, profileSuccessMessage}) {

  const reg = /^[а-яА-ЯёЁa-zA-Z0-9\s-]+$/
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, resetForm, setValues } = UserFormValidation({
    name: (value) => {
      if (!reg.test(value)) {
        return 'Поле содержит недопустимые символы'
      }
      return '';
    }
  });

  const handleSubmit = (e) => {
    const { name, email } = values;
    e.preventDefault();
    handleUpdateProfile(name, email)
  }

  useEffect(()=> {
    setValues(currentUser)
  },[currentUser])

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
