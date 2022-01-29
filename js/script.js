//get API

const API_KEY = 'api_key=11a9e127bc9b30c53ac934c29e209fea';
const URL_BASE = 'https://api.themoviedb.org/3';
const API_IMG = 'https://image.tmdb.org/t/p/w500';
const URL = URL_BASE + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const URL_SEARCH = URL_BASE + '/search/movie?' + API_KEY;

const search = document.querySelector('.header-search');
const inputSearch = document.querySelector('.search-request');
const btnSearch = document.querySelector('.search-btn');
const clearSearch = document.querySelector('.clear-btn');
const cards = document.querySelector('.cards');
const cardItem = document.querySelector('.card-item');

const createTemplate = (movieData) => {
  return `
            <div class="card-item">
              <div class="card__name">${movieData.title}</div>
              <div class="card__poster">
                <img class="poster-img" src="${
                  API_IMG + movieData.poster_path
                }" alt="" />
              </div>
              <div class="card__year">Release: ${movieData.release_date.slice(
                0,
                4
              )} year</div>
              <div class="card__rating"> <img src="./img/stars.svg" alt="stars">${
                movieData.vote_average
              }</div>
            </div>
  `;
};

const getMovie = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const movieData = data.results;
  showMovie(movieData);
};

getMovie(URL);

const showMovie = (movieData) => {
  cards.innerHTML = '';
  movieData.slice(0, 8).map((element) => {
    cards.innerHTML += createTemplate(element);
  });
};

const searchMovie = (e) => {
  e.preventDefault();

  const value = inputSearch.value.trim();

  if (value) {
    getMovie(URL_SEARCH + '&query=' + value);
  }

  inputSearch.value = '';
};

clearSearch.addEventListener('click', (e) => {
  e.preventDefault();
  inputSearch.value = '';
});

btnSearch.addEventListener('click', searchMovie);
search.addEventListener('submit', searchMovie);
