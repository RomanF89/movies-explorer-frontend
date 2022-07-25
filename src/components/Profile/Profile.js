import './Profile.css'

function Profile() {

  return (
    <section className='profile'>
      <form className='profile__form' name='profile-form'>
        <h2 className='profile__form-title'>Привет, Роман!</h2>
        <fieldset className='profile__fields'>
          <div className='profile__field'>
            <label className='profile__field-label'>Имя</label>
            <input className='profile__input' type='text' id='profile-name' name='name' defaultValue='Роман'></input>
          </div>
          <div className='profile__field'>
            <label className='profile__field-label'>E-mail</label>
            <input className='profile__input' type='text' id='profile-email' name='email' defaultValue='Роман@mail.ru'></input>
          </div>
        </fieldset>
        <button className='profile__submit' type='submit' aria-label='Редактировать профиль'>Редактировать</button>
      </form>
      <button className='profile__exit' aria-label='Выйти из акканута'>Выйти из аккаунта</button>
    </section>
  )
}

export default Profile;
