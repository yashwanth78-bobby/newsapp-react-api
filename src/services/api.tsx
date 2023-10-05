import axios from 'axios';
export const BASE_URL = 'https://newsapi.org/v2/';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getHeadlineByCountry = async () => {
  axios
    .get(
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=f463419c4e4c4ebd96549c95688e979b'
    )
    .then((response: any) => {
      // handle success
      return response.data;
    })
    .catch((error: any) => {
      // handle error
      console.log(error);
    });
};

export const fetchSearchDataApi = async (query: any) => {
  const API_KEY = 'f463419c4e4c4ebd96549c95688e979b';
// const key4 = '2d55f494fe674381af5e990d5d995b6e';
  // const key5 = 'ac009e2e2d1b4cc3a6ec7087c51a73af';
  try {
    const data = await axios.get(
      ` https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
