export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const checkResponse = (response) => {
  console.log('response ok: ', response);
  if (response.ok) {
    return response.json();
  }

  return response.json().then((res) => {
    throw res;
  })
}

export const getMovies = () => {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(checkResponse);
}
