const SearchRegExp = /[\w\-а-я\sё]/gi;
const EmailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const NameRegExp = /^[а-яА-ЯёЁa-zA-Z0-9\s-]+$/;
const BaseUrl = 'https://api.nomoreparties.co';

export {
  SearchRegExp,
  EmailRegExp,
  NameRegExp,
  BaseUrl,
}
