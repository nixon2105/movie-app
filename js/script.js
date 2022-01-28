const cards = document.querySelector('.cards');

const createTemplate = (movieData) => {
  return `
            <div class="card-item">
              <div class="card__name">${movieData.Title}</div>
              <div class="card__poster">
                <img src="./img/poster.jpg" alt="" />
              </div>
              <div class="card__year">2021</div>
              <div class="card__rating">8.1</div>
            </div>
  `;
};

const API_KEY = '86bf43e';
const getMovie = async () => {
  const url = `https://www.omdbapi.com/?s=marvel&page=2&apikey=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  const movieData = data.Search;
  movieData.map((element) => {
    cards.innerHTML += createTemplate(element);
  });
};

getMovie();

// const movieData = getMovie().then((movie) => movie.Search);
